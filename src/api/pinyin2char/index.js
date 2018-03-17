import unicodeMap from './unicode_to_hanyu_pinyin'

const unicodeMapPinyin  = {};
unicodeMap.reduce((pre,item)=>{
  pre[item.unicode] = item.pinyin
  return pre
},unicodeMapPinyin);
function getFirstCharFromString(str){
  str = str.trim();
  if(!str){
    console.error('数据为空')
    return ''
  }
  const firstChar = str[0];
  const code = firstChar.charCodeAt(0);
  //122 ----> z
  if(code>122){
    //中文
    const uCode = code.toString(16).toUpperCase()
    if(unicodeMapPinyin[uCode]){
      //正确
      //返回第一个
      return unicodeMapPinyin[uCode][0][0].toUpperCase()
    }else{
      console.error('首字母不正确')
    }
  }
  else{
    //英文，直接返回
    if(/[A-Za-z]/.test(firstChar)){
      return firstChar.toUpperCase();
    }else{
      //not char
      console.error('首字母不正确！');
    }
  }
  return ''
}
export default getFirstCharFromString
