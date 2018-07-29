import { wxRequest } from '../utils/wxRequest'

export const imgUrlPre = 'https://jewelry.timovips.com'
export const noImgUrl = 'http://p40ssgysb.bkt.clouddn.com/noimage.jpeg'
export const apiPre = 'https://jewelry.timovips.com/api'
// const apiPre = 'https://result.eolinker.com/Fauq4sib11ae9fe69c890891c81105fb89c7e0a92234310?uri='
// 查询品牌列表
export const getBrandList = (params) => wxRequest(params, apiPre + '/brand/query')
// 查询品牌信息
export const getBrandInfo = (params) => wxRequest(params, apiPre + '/brand/getBrand')
// 查询品牌下的所有系列信息
export const getBrandSeries = (params) => wxRequest(params, apiPre + '/series/querySeries')
// 查询商品信息
export const getGoods = (params) => wxRequest(params, apiPre + '/goods/choiceGoods')
// 查询商品信息(新接口)
export const getGoodsList = (params) => wxRequest(params, apiPre + '/goods/queryGoodsByBrandAndSeries')
// 查询商品详细信息
export const getGoodsDetail = (params) => wxRequest(params, apiPre + '/goods/getGood')
// 模糊搜索
export const search = (params) => wxRequest(params, apiPre + '/goods/searchGoods')
// 获取广告接口
export const getAd = (params) => wxRequest(params, apiPre + '/diamond/getAd')
// 通过钻戒类型获取主石分类
export const getTypes = (params) => wxRequest(params, apiPre + '/diamond/queryMainStore')
