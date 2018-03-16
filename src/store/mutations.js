
import {
  RECEIVE_BRAND,
  RECEIVE_CATEGORY,
  RECEIVE_HOME_PAGE
} from './mutation-types'


export default {
  [RECEIVE_HOME_PAGE](state,{data}){
    state.homePage = data
  },
  [RECEIVE_CATEGORY](state,{data}){
    state.category = data
  },
  [RECEIVE_BRAND](state,{data}){
    state.brand = data
  },
}
