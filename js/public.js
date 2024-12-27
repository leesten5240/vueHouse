//定义常量
//基本地址
const BASEURL='http://127.0.0.1:8080/fwgl';

//根据id获取value值
/**
 * @param {Object} did 元素的id
 */
function $(did){
	return document.getElementById(did).value;
}