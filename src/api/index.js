import ajax from './ajax'

export const reqHomePage = () => ajax('/homepage')
export const reqCategory= () => ajax('/category')
export const reqBrand = () => ajax('/brand')
