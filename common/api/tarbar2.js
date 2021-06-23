import $http from '../request/http.js'
//获取商品列表场次
export const getSession = () => {
	return $http({
		url:'/app/play/list',
		method:'GET'
	})
}

//获取商品列表
export const getShopList = (data) => {
	return $http({
		url:'/app/shop/list',
		data,
		method:'POST'
	})
}