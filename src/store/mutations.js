import * as types from './mutation-types'

const mutations = {
  [types.SET_CITY](state,city) {
    state.city = city
  },
  [types.SET_GOODS](state, goods) {
    state.goods =goods;
  },
  [types.GET_SHOPLIST_INDEX](state, SHOPLIST) {
    state.shoplist = SHOPLIST
  }
};

export default mutations
