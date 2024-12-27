/**
 * @param {Object} url 接口地址
 * @param {Object} data 接口要的数据
 * @param {Object} callback 4&&200之后要干的回调，是一个函数
 */
function postJson(url, data, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.withCredentials = true;
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let response = JSON.parse(xhr.responseText);
			callback(response);
		}
	}
	if (data == null) {
		xhr.send(null);
	} else {
		xhr.send(JSON.stringify(data));
	}
}

/**
 * @param {Object} url 接口地址
 * @param {Object} d 数据d={属性名：值，属性名：值}
 * @param {Object} callback 回调函数
 */
function getJson(url, d, callback) {
	if (d == null) {
		//没数据，不进行处理
	} else {
		//有数据，把数据放到url后
		url=url+'?';
		for(let k in d){
			url=url+k+'='+d[k]+'&';
		}
	}
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.withCredentials = true;
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let response = JSON.parse(xhr.responseText);
			callback(response);
		}
	}
	xhr.send(null);

}