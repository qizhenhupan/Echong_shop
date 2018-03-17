import getFirstCharFromStr from '../api/pinyin2char'



export default {
  allBrand(state){
    const {brand} = state;
    const result = {};
    brand.reduce((pre,item)=>{
      const {list} = item;
      list.forEach(i=>{
        const {name} = i ;
        const firstChar = getFirstCharFromStr(name);
        pre[firstChar] = pre[firstChar] || {name:firstChar,value:[]};
        pre[firstChar].value.push(i);
      });
      return pre
    },result);
    return result
  },
}
