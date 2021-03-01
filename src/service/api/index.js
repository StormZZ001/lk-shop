import ajax from './ajax'

// http://demo.itlike.com/web/xlmc/api/homeApi
// http://demo.itlike.com/web/xlmc/api/homeApi/categories
// http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001
// lk001 - lk006
//定义基础路径

export const BASE_URL='http://demo.itlike.com/web/xlmc/'
export const getHomeData=()=>ajax(BASE_URL+'api/homeApi')
export const getCategories=()=>ajax(BASE_URL+'api/homeApi/categories')
export const getCategoriesDetails=(preParams)=>ajax(BASE_URL+'api/homeApi/categoriesdetail/'+preParams)