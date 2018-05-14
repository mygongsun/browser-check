/* 校验浏览器 开始 */
var BrowserCheck = (function() {

    'use strict';

    var instance;

    var BrowserCheck = function() {
        if(instance) {
            return instance;
        }

        this.browser = {};

    	this.ua = window.navigator.userAgent.toLowerCase();

        return instance = this;
    };

    /**
     * 获取完成浏览器类型/版本对象
     */
    BrowserCheck.prototype.get = function() {

		var s;

		if(s = this.ua.match(/msie ([\d.]+)/)) {
			this.browser.type = "ie";
		} else if(s = this.ua.match(/opr.([\d.]+)/)) {
			this.browser.type = "opera";
		} else if(s = this.ua.match(/opera.([\d.]+)/)) {
			this.browser.type = "opera";
		} else if(s = this.ua.match(/firefox\/([\d.]+)/)) {
			this.browser.type = "firefox";
		} else if(s = this.ua.match(/chrome\/([\d.]+)/)) {
			this.browser.type = "chrome";
		} else if(s = this.ua.match(/version\/([\d.]+).*safari/)) {
			this.browser.type = "safari";
		} else {
			this.browser.type = "other";
		}

		if(s) {
			this.browser.version = {};
			this.browser.version.all = s[1] ? s[1] : 0;
			this.browser.version.major = s[1] ? s[1].split(".")[0] : 0;
		}

		return this.browser;
    };

    return BrowserCheck;
})();
/* 校验浏览器 结束 */