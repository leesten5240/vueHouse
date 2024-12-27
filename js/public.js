//定义常量
//基本地址
const BASEURL='http://192.168.4.2:8088/fwgl';

//根据id获取value值
/**
 * @param {Object} did 元素的id
 */
function $(did){
	return document.getElementById(did).value;
}