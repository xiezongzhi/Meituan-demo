import * as types from './mutation-types'

const mutations = {
  [types.SET_CITY](state,city) {
    state.city = city
  },
  [types.SET_GOODS](state, goods) {
    state.goods = goods
  }
};

export default mutations
