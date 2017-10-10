import jsonp from './jsonp'
import {commonParams,root} from './config'
import axios from 'axios'
import Qs from 'qs'


function param(data) {
  let url = '';
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}



/**
 * 存储localStorage
 */

export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 获取酒店列表
 */
export const getHotelList=(param)=>{
  const time = new Date().getTime()
  const url='http://api.map.baidu.com/geosearch/v3/local?time='+time;
  const data=Object.assign({},commonParams,param);
  return jsonp(url, data)
};

/**
 * 获取酒店详情
 */
export const getHotelDetail=(mer_id)=> axios.get(root+'/Home/HotelInfo/getHotel',{params:{mer_id:mer_id}});

/**
 * 获取酒店设施&类型
 */
export const getHotelFilter=(type)=> axios.get(root+'/Home/HotelInfo/getTF',{params:{type:type}});
/**
 * 获取筛选酒店id
 */
export const getHotelFilterId=(str)=> axios.get(root+'/Home/HotelInfo/getHotelRange',{params:{tfID:str}});

/**
 * 获取美食首页商家列表（周边检索）
 */
export const getCityList=()=> axios.get(root+'/Home/Index/getCity');
/**
 * 获取定位
 */
export const initCity=()=> axios.get(root+'/Home/Index/glocate');

/**
 * 获取首页banner
 */
 export const getBanner=()=> axios.get(root+'/Home/Index/getBanner');
 /**
 * 获取首页商家列表
 */
 export const getshopList=(city)=> axios.get(root+'/Home/Index/getMerchantsIndexLocal',{params:{region:city}});
  /**
 * 获取搜索列表
 */
 export const getSearchList=(str)=> axios.get(root+'/Home/Index/getMerchantsIndexLocal',{params:{q:str}});
  /**
 * 获取首页最新资讯
 */
  export const getNews=()=> axios.get(root+'/Home/Index/getNws');


/**
 * 获取美食首页轮播图
 */
export const getFoodBanner=(typeNum)=>{
	
  const url=root+'/Home/Food/getBanner?type='+typeNum;
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data.body)
    })
  })
};

/**
 * 获取美食首页商家列表（本地检索）
 */
export const getGoodsListLocal=(par)=>{
  const url=root+'/Home/Food/getMerchantsIndexNearby?'+param(par);
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data)
    })
  })
};
/**
 * 获取商家详情信息
 */
export const getGoodsDetail=(par)=>{
  const url=root+'/Home/GetGoodsDetailed/getFoodDetailedByMerId?'+param(par);
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data.body)
    })
  })
};


/**
 * 获取团购订单信息
 */
export const getOrder=axios.get(root+'/Home/GetGoodsDetailed/getOrderMessage');

/**
 * 提交订单
 */
export const addOrder=(par)=>{
  const url=root+'/Home/FoodOrder/addOrder?'+param(par);
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data.body)
    })
  })
};

/**
 * 获取购物车信息
 */
export const getShopCart=(par)=>{
  const url=root+'/Home/shopCart/shop_cart?'+param(par);
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data.body)
    })
  })
};

/**
 *用户注册
 */
export const register=(par)=>{
    const url=root+'/Home/Member/register';
    return new Promise(function(resolve){
      axios.post(url,Qs.stringify(par), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        ).then((res)=>{
        resolve(res.data)
      })
    })
  };

/**
 *用户登陆
 */
export const login=(par)=>{
  const url=root+'/Home/Member/login';
  return new Promise(function(resolve){
    axios.post(url,Qs.stringify(par), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((res)=>{
      resolve(res.data)
    })
  })
};

