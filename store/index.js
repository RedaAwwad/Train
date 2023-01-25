import $axios from 'axios';

function formatWidgets(widgets) {
  return widgets.map(widget => {
    if (widget.type.includes('overview')) {
      widget.data = [
        [widget.options.firstName, widget.options.firstCount],
        [widget.options.secondName, widget.options.secondCount],
      ]
    } else if (widget.type === 'pie') {
      widget.data = widget.options.items.map(item => {
        return {
          name: item.name,
          y: item.count,
          // sliced: true,
          // selected: true
        }
      })
    } else if (widget.type === 'horizontalBar') {
      widget.type = 'horizontalBarGroup'
      widget.data = {
        xAxis: {
          categories: widget.options.axis,
          title: {
            text: null
          }
        },
        series: widget.options.series
      };

      // if(widget.options.series?.length && widget.options.series.length > 1) {
      //   widget.type = 'horizontalBarGroup'
      //   widget.data = {
      //     xAxis: {
      //       categories: widget.options.axis,
      //       title: {
      //         text: null
      //       }
      //     },
      //     series: widget.options.series
      //   };

      // } else if(widget.options.series?.length && widget.options.series.length === 1) {
      //   const series = widget.options.series[0];
      //   const data = widget.options.axis.map((item, i) => {
      //     let category = [item, series.data[i]];
      //     console.log(category);
      //     return category;
      //   })
      //   widget.data = {
      //     series: [{
      //       type: 'bar',
      //       name: series.name,
      //       data: data
      //     }]
      //   };
      // }
    } else if (widget.type === 'verticalBar') {
      console.log({ widget });
      widget.data = {
        xAxis: {
          categories: widget.options.axis,
          // title: {
          //   text: null
          // },
          crosshair: true
        },
        series: widget.options.series
      };

    }

    console.log(widget);

    return widget;
  });
}

export const state = () => ({
  isLoading: true,
  widgets: [],
  filters: []
})

export const getters = {

}

export const mutations = {
  TOGGLE_LOADING(state, status) {
    state.isLoading = status;
  },
  UPDATE_WIDGETS(state, widgets) {
    state.widgets = widgets;
  },
  UPDATE_FILTERS(state, filters) {
    state.filters = filters;
  },
}

export const actions = {
  nuxtServerInit({ commit, state }, { req }) {
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }

    // process.env.TOKEN
    // console.log($auth);

  },
  async fetchDashboardData({ commit }, params = { dashboard_type: 'all' }) {
    try {
      commit('TOGGLE_LOADING', true);
      // $axios.defaults.baseURL = process.env.API_BASE_URL;
      // $axios.defaults.headers = {isJwt: true};
      // $axios.defaults.headers.common = {'Authorization': `bearer ${process.env.TOKEN}`}
      // const url = 'panel/dashboard/kpi?dashboard_type=all';
      let url = `${process.env.API_BASE_URL}${process.env.API_URL}`;
      let query = null;

      for (const param in params) {
        if (!query && params) {
          query = `?${param}=${params[param]}`
        }
        else {
          query = `${query}&${param}=${params[param]}`;
        }
      }

      url = url + query;

      console.log({ url });

      const res = await $axios.get(url);
      const widgets = formatWidgets(res.data?.widgets || []);
      const filters = res.data?.filters || [];
      // console.log({ widgets });

      commit('UPDATE_WIDGETS', widgets);
      commit('UPDATE_FILTERS', filters);
    } catch (error) {
      console.error({ error });
    } finally {
      commit('TOGGLE_LOADING', false);
    }
  }
}
