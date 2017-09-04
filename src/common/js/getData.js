


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
 * 获取首页商家列表
 */

 // export const groupcity = () => Vue.Jsonp('http://api.map.baidu.com/geosearch/v3/local?ak=H8L6uIttz0p18ZXYuxkk8TUGTPYKrXXP&geotable_id=172120&region=珠海&filter=audit_status:1|status:1', function (err, data) {
 //        if (err) {
 //          console.error(err.data);
 //        } else {
 //          console.log(data);
 //        }