import jsonp from './jsonp'
import {commonParams,root} from './config'
import axios from 'axios'


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
export const getHotelDetail=(mer_id)=> axios.get('/meituan/Home/HotelInfo/getHotel',{params:{mer_id:mer_id}});
/**
 * 获取酒店设施&类型
 */
export const getHotelFilter=(type)=> axios.get('/meituan/Home/HotelInfo/getTF',{params:{type:type}});
/**
 * 获取筛选酒店id
 */
export const getHotelFilterId=(str)=> axios.get('/meituan/Home/HotelInfo/getHotelRange',{params:{tfID:str}});

/**
 * 获取城市列表
 */
export const getCityList=()=> axios.get('/meituan/Home/Index/getCity');
/**
 * 获取定位
 */
export const initCity=()=> axios.get('/meituan/Home/Index/glocate');

/**
 * 获取首页banner
 */
 export const getBanner=()=> axios.get('/meituan/Home/Index/getBanner');
 /**
 * 获取首页商家列表
 */
 export const getshopList=(city)=> axios.get('/meituan/Home/Index/getMerchantsIndexLocal',{params:{region:city}});
  /**
 * 获取搜索列表
 */
 export const getSearchList=(str)=> axios.get('/meituan/Home/Index/getMerchantsIndexLocal',{params:{q:str}});
  /**
 * 获取首页最新资讯
 */
  export const getNews=()=> axios.get('/meituan/Home/Index/getNws');


/**
 * 获取美食首页轮播图
 */
export const getFoodBanner=(typeNum)=>{
	
  const url='/meituan/Home/Food/getBanner?type='+typeNum;
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
  const url='/meituan/Home/Food/getMerchantsIndexNearby?'+param(par);
  return new Promise(function(resolve){
    axios.get(url).then((res)=>{
      resolve(res.data)
    })
  })
}