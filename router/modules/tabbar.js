
// router/modules/home.js
const tabbar = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/index/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'index',
        meta: {
	        title: '首页',
	    },
    },
    {
	    path: '/pages/mall/mall',
        name: 'mall',
        meta: {
	        title: '商城',
	    },
	},
	{
	    path: '/pages/mine/mine',
	    name: 'mine',
	    meta: {
	        title: '订单',
	    },
	},
	{
	    path: '/pages/transaction/transaction',
	    name: 'transaction',
	    meta: {
	        title: '交易中心',
	    },
	},
	{
	    path: '/pages/my/my',
	    name: 'my',
	    meta: {
	        title: '我的',
	    },
	},
]
export default tabbar