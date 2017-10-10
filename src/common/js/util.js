export const urlParse=function (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let obj = {};
  let result = window.location.search.substr(1).match(reg);
  obj[name] = decodeURIComponent(result[2]);
  return obj;
};
export  const trim=function (str) {
   str= str.replace(/\s+/g,"");
  return str
};
export const _mm={
  validate(value,type){
    //非空验证
    if (type === 'require') {
      return !!value;
    }
    //手机验证
    if (type === 'phone') {
      return /^1\d{10}$/.test(value);
    }
    //邀请码验证
    if(type==='inviteCode'){
      return /^\d*$/g.test(value);
    }
    //邮箱验证
    if (type === 'email') {
      return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
    }
  }
}
