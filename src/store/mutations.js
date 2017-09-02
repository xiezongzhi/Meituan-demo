import * as types from './mutation-types'

const mutations = {
    [types.SET_CITY](state,c) {
        state.city = c
    }
}

export default mutations
