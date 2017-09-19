import * as types from './mutation-types'


const mutations = {
  [types.SET_CURRENT_CITY](state,currentCity) {
    state.currentCity = currentCity
  },
  [types.SET_SELECT_CITY](state,selectCity) {
    state.selectCity = selectCity
  },
  [types.SET_GOODS](state, goods) {
    state.goods = goods;
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
  [types.SET_FILTERID](state, payload) {
    state.filterId = payload.filterId
    state.selected_id = payload.selected_id
  },
  [types.SET_CONFIRMSTATUS](state) {
    state.confirmStatus = !state.confirmStatus
  },

  

};

export default mutations
