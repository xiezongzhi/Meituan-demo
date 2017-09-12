import * as types from './mutation-types'


const mutations = {
  [types.SET_CITY](state,city) {
    state.city = city
  },
  [types.SET_GOODS](state, goods) {
    state.goods = goods
  },
  [types.GET_SHOPLIST_INDEX](state, shopList) {
    state.shopList = shopList
  },
   [types.SET_LOADING](state, Booleans) {
    state.load = Booleans
  },
  [types.SET_HOTEL_DATE](state, data) {
    state.hotelDate = data
  },

};

export default mutations
