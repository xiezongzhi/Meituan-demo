export function urlParse(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let obj = {};
    let result = window.location.search.substr(1).match(reg);

    obj[name] = decodeURIComponent(result[2]);
    return obj;
}