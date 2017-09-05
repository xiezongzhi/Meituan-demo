import jsonp from './jsonp'
import {commonParams} from './config'

/**
 * 获取当前定位经纬度、地址
 */
export const locat_city = () => {
	return new Promise(function(resolve) {
		let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            // alert('您的位置：'+r.point.lng+','+r.point.lat);
            let point = new BMap.Point(r.point.lng,r.point.lat);
            //用所定位的经纬度查找所在地省市街道等信息
                  let gc = new BMap.Geocoder();
                  gc.getLocation(point, function(rs){
                     let addComp = rs.addressComponents;
                      // return addComp.city
                      resolve([point,addComp])
                  });
          }
          else {
            alert('failed'+this.getStatus());
          }
        },{enableHighAccuracy: true})
	})

}


/**
 * 两地之间的距离
 */
export const getDistance=(pointArray)=>{
 return new Promise(function(resolve){
    locat_city().then((res)=>{
      let map = new BMap.Map();
      let lng = res[0].lng;
      let lat = res[0].lat;
      let point1 = new BMap.Point(pointArray[0], pointArray[1]);
      let point2 = new BMap.Point(lng,lat);
      let dis = map.getDistance(point1, point2).toFixed(0);
      resolve (dis>1000?(dis/1000).toFixed(1)+'km':dis+'m');
    })
  });
};

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 获取酒店列表
 */
export const getHotelList=(param)=>{
  const url='http://api.map.baidu.com/geosearch/v3/local';
  const data=Object.assign({},commonParams,param);
  return jsonp(url, data)
};

/**
 * 获取美食首页商家列表
 */
export const getGoodsList=(param)=>{
  const url='http://api.map.baidu.com/geosearch/v3/local';
  const data=Object.assign({},commonParams,param);
  return jsonp(url, data)
};

