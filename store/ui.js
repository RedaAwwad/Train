/**
 * UI Module
 * - For DOM Manipulation
 * & any UI state management
 */

export const state = () => ({
  isSidebar: true,
});

export const getters = {
  isSidebar(state) {
    return state.isSidebar;
  },
};

      // this.$store.commit('ui/TOGGLE_SIDEBAR', false);


export const mutations = {
  TOGGLE_SIDEBAR(state, status) {
    state.isSidebar = status;
  },
};

export const actions = {};
