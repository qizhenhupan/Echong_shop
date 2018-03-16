import {
  RECEIVE_HOME_PAGE,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND
} from './mutation-types'
import {
  reqBrand,
  reqCategory,
  reqHomePage
} from '../api/index'


export default {
  async getHomePage({commit},cb){
    const result = await reqHomePage()
    if(result.code===0){
      commit(RECEIVE_HOME_PAGE,{data:result.data})
      cb && cb()
    }
  },
  async getCategory({commit}){},
  async getBrand({commit}){},
}
