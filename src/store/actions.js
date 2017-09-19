import * as types from './mutation-types';
export const changGoods = function ({commit, state}, goods) {
  commit(types.SET_GOODS, goods)
}
