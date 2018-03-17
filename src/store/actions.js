import {
  RECEIVE_HOME_PAGE,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND
} from './mutation-types'
import {
  reqBrand,
  reqCategory,
  reqHomePage
} from '../api'
import getFirstCharFromStr from '../api/pinyin2char'


export default {
  async getHomePage({commit},cb){
    const result = await reqHomePage()
    if(result.code===0){
      commit(RECEIVE_HOME_PAGE,{data:result.data})
      cb && cb()
    }
  },
  async getCategory({commit},cb){
    const result = await reqCategory()
    if(result.code===0){
      commit(RECEIVE_CATEGORY,{data:result.data})
      cb && cb()
    }
  },
  async getBrand({commit},cb){
    const result = await reqBrand()
    if(result.code===0){
      //添加firstChar属性
      const data = result.data.map(i=>{
        i.firstChar =  getFirstCharFromStr(i.title||'');
        return i
      });
      commit(RECEIVE_BRAND,{data:result.data});
      cb && cb()
    }
  },
}
