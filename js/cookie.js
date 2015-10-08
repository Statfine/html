/**
 * 项目公共方法类
 * js依赖：jquery.js
 * @memberOf {TypeName} 
 * @return {TypeName} 
 */
var P3TCommon = (function PPPTrainingCommon () {	

	
	/**
	 * 保存cookie
	 * @param {Object} name cookie名
	 * @param {Object} value cookie值
	 * @param {Object} expires 过期时间，单位s
	 * @param {Object} path 相对路径
	 * @param {Object} domain 域名
	 */
	this.setCookie = function (name, value, expires, path, domain) {
		if (typeof value == "object" || typeof value == "array") {
			value = JSON.stringify(value);
		}
		expires = expires || 3600*24*14;// 设置默认时间为2周
		path = path || "/";// 设置默认路径为项目根路径
		var d = "" + name + "=" + value;
		var f = new Date(new Date().getTime() + expires * 1000);
		var e = ";expires=" + f.toUTCString();
		var dm ;
		if (!domain) {
			dm = "";
		}
		else {
			dm = ";domain=" + domain;
		}
		document.cookie = name + "=" + value + ";path=" + path + e + dm;
	};

	/**
	 * 读取cookie
	 * @param {Object} name cookie名
	 * @return {TypeName} 
	 */
	this.getCookie = function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		var value = null;
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) {
				value = decodeURIComponent(c.substring(nameEQ.length, c.length))
				if (value.length > 0) {
					var value0 = value[0];
					if (value0 == "{" || value0 == "[") {
						value = eval("(" + value + ")");
					}
				}
			}
		}
		return value;
	}
	
	/**
	 * 删除cookie
	 * @param {Object} name string
	 */
	this.deleteCookie = function (name) { 
    	var expdate = new Date(); 
    	expdate.setTime(expdate.getTime() - (1000 * 3600 * 24 * 1)); 
	    setCookie(name, "", expdate); 
	} 
	
	
})();