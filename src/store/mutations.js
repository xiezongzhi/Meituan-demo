import * as types from './mutation-types'

const mutations = {
  [types.SET_CITY](state,city) {
    state.city = city
  },
  [types.SET_FOODS](state, FOODS) {
    state.foods = FOODS
  }
};

export default mutations
