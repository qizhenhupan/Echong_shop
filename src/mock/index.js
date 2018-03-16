import Mock from 'mockjs'
import data from './data'
const {homepage} = data
const menus = homepage.menus.map((menu)=>{
const    {menu_name,menu_font_color,menu_line_color,menu_target} = menu
  return  {menu_name,menu_font_color,menu_line_color,menu_target}
})
const datas = homepage.datas.map(data=>{
  const {index,type_name,value,content_images,menus} = data
  const obj =  {index,type_name,value,content_images,menus}
  return Object.keys(obj).reduce((final,key)=>{
    if(obj[key]){
      final[key] = obj[key]
    }
    return final
  },{})
})
const f = {}
f.menus = menus
datas.forEach(data=>{
  switch(data.index){
    case '3132':
      f.dog_banner = data.value.map(o=>{return o.image})
      break;
    case '3133':
      f.dog_img = data.value[0].image;
      break;
    case '3134':
      f.menu_list  = data.menus.map(m=>{
        return m.image
      });
      break;
    case '3135':
      f.miaosha = data.value[0].image;
      break;
    case '3137':
      f.brand_power = data.value[0].image;
      break;
    case '3138':
      f.gif = data.value[0].image;
      break;
    case '3139':
      f.vip = data.value[0].image;
      break;
    case '3140':
      const content = data.content_images;
      f.vip_services =   content.reduce((final,item)=>{
        return final.concat(item)
      },[]).map(o=>{return o.image})
      break;
    case '3141':
      f.dapaituan = data.value[0].image;
      break;
    case '3142':
      f.dapaituan_list = data.value.map(i=>{
        return i.image
      });
      break;
    case '3143':
      f.haohuo = data.value[0].image;
      break;
    case '3144':
    case '3146':
    case '3148':
    case '3151':
    case '3153':
      const haohuo_list = f.haohuo_list || [];
      f.haohuo_list = data.content_images.reduce((f,item)=>{
        return f.concat(item.map(o=>o.image))
      },haohuo_list)
      break;
    case '3154':
      f.zuican = data.value[0].image;
      break;
    case '3155':
      f.zuican_content = data.value[0].image;
      break;
    case '3156':
      f.special = data.value[0].image;
      break;
    case '3157':
      const special_list = data.content_images;
      f.special_list =  special_list.reduce((final,item)=>{
        return final.concat(item)
      },[]).map(o=>{return o.image});
      break;
    case '3158':
      f.lanmu =  data.value[0].image;
      break;
    case '3159':
      const lanmu_list = data.content_images;
      f.lanmu_list =  lanmu_list.reduce((final,item)=>{
        return final.concat(item)
      },[]).map(o=>{return o.image});
      break;
  }
});

Mock.mock('/homepage',{code:0,data:f})
Mock.mock('/category',{code:0,data:'category'})
Mock.mock('/brand',{code:0,data:'brand'})

export default  f
