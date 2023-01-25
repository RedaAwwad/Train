<template>
  <div>
    <v-card color="transparent" class="mb-6" elevation="0">
      <v-row v-if="isLoading">
        <v-col v-for="loader in 3" :key="loader+'1'" cols="12" sm="6" md="4">
          <v-card elevation="0" class="pt-6 pt-sm-8 pb-0">
            <h3 class="mb-3 d-flex justify-center">
              <v-skeleton-loader
                type="heading" tile :width="400" :height="15"
              ></v-skeleton-loader>
            </h3>
            <h3 class="mb-6 d-flex justify-center">
              <v-skeleton-loader
                type="heading" tile :width="400" :height="15"
              ></v-skeleton-loader>
            </h3>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-skeleton-loader
                type="image" tile
              ></v-skeleton-loader>
            </div>
            
            <!-- <div class="d-flex flex-column flex-md-row align-center justify-space-between gap py-2">
              <div class="ps-6">
                <h3 class="mb-3 d-flex justify-center">
                  <v-skeleton-loader
                    type="heading" tile :width="350" :height="15"
                  ></v-skeleton-loader>
                </h3>
                <h3 class="mb-6 d-flex justify-center">
                  <v-skeleton-loader
                    type="heading" tile :width="350" :height="15"
                  ></v-skeleton-loader>
                </h3>
              </div>
              <div class="pe-2">
                <v-skeleton-loader
                type="chip" tile 
              ></v-skeleton-loader>
              </div>
            </div> -->
          </v-card>
        </v-col>
        <v-col v-for="loader in 2" :key="loader+'2'" cols="12" sm="6">
          <v-card elevation="0" class="pt-6 pt-sm-8 pb-0">
            <h3 class="mb-6 px-6">
              <v-skeleton-loader
                type="heading" tile :width="400" :height="15"
              ></v-skeleton-loader>
            </h3>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-skeleton-loader
                type="image" tile
              ></v-skeleton-loader>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="(widget, i) in widgets" :key="i" cols="12" sm="6" :md="widget.size"> 
          <!-- <h3 class="px-4 pt-4 font-weight-bold text-center">{{ widget.name }}</h3> -->
          <statistics-card v-if="widget.type.includes('overview')" 
          :title="widget.options.countAllName" 
          :content="widget.options.countAll"
          :pieData="widget.data"/>
          <pie v-else-if="widget.type === 'pie'" 
          :title="widget.name" 
          :data="widget.data" :width="400" :height="400"/>

          <line-chart v-else-if="widget.type === 'lineChart'" :title="widget.name"
          :height="200" :data="data" :x-data="xDataFilters"/>
          <!-- widget.type === 'horizontalBarGroup' ||  -->
          <v-card v-else-if="widget.type === 'horizontalBarGroup'" elevation="0" class="pa-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              {{ widget.name }}
            </h3>
            <horizontal-bar-group :data="widget.data"/>
          </v-card>

          <v-card v-else-if="widget.type === 'horizontalBar' && widget.data" elevation="0" class="pa-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              {{ widget.name }}
            </h3>
            <horizontal-bar :data="widget.data"/>
          </v-card>

          <v-card v-else-if="widget.type === 'verticalBar'" elevation="0" class="pa-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              {{ widget.name }}
            </h3>
            <vertical-bar :data="widget.data"/>
          </v-card>
        </v-col>
        
        <!-- <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب العملي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col> -->
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GeneralFilterPage',
  layout: 'dashboard',
  data() {
    return {
      loading: true,
      chartsFilter: 'day',
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6],
      areaData: [1, 200, 400, 280, 360, 150, 120, 180, 160, 150, 300, 225, 500, 400, 380, 500, 250, 450, 400, 500, 325, 300, 500, 500],
      nationalitesData: [
        ['سعودي',  92],
        ['أجنبي',  119],
      ],
      interviewsData: [
        ['المقبولين',  33],
        ['المرفوضين',  100],
      ],
      contractData: [
        ['وقعوا عقودهم',  92],
        ['لم يوقعوا بعد',  30],
      ],
      areaX: ['01:00', '02:00', '03:00','04:00', '05:00', '06:00', '07:00','08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00','00:00']
    }
  },
  computed: {
    ...mapState(['isLoading', 'widgets']),
    xDataFilters() {
      if(['day', 'week', 'month'].includes(this.chartsFilter)) {
        let filters = {
          day: [],
          week: [],
          month: []
        }

        return filters[this.chartsFilter];
      }

      return []
    },
  },
  created() {
    this.$store.dispatch('fetchDashboardData');
  }
}
</script>
