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

		var s = null;

		if(s = this.ua.match(/edge\/([\d.]+)/)) {
			this.browser.type = "edge";
		} else if(s = this.ua.match(/rv:([\d.]+)\) like gecko/)) {
			this.browser.type = "ie";
		} else if(s = this.ua.match(/msie ([\d.]+)/)) {
			this.browser.type = "ie";
		} else if(s = this.ua.match(/qqbrowser\/([\d.]+)/)) {
			this.browser.type = "qq";
		} else if(s = this.ua.match(/metasr ([\d.]+)/)) {
			this.browser.type = "sogou";
		} else if(s = this.ua.match(/bidubrowser\/([\d.]+)/)) {
			this.browser.type = "baidu";
		} else if(s = this.ua.match(/maxthon\/([\d.]+)/)) {
			this.browser.type = "maxthon";
		} else if(s = this.ua.match(/ubrowser\/([\d.]+)/)) {
			this.browser.type = "uc";
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
		} else {
			this.browser.version = {};
			this.browser.version.all = 0;
			this.browser.version.major = 0;
		}

		return this.browser;
    };

    return BrowserCheck;
})();
/* 校验浏览器 结束 */