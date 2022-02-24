;(function () {
	// 向页面注入JS
	function injectCustomJs(jsPath) {
		jsPath = jsPath || 'lib/vue.global.js'
		var temp = document.createElement('script')
		temp.setAttribute('type', 'text/javascript')
		temp.src = chrome.extension.getURL(jsPath)
		temp.type = 'module'
		document.querySelector('head').appendChild(temp)
	}
	injectCustomJs()
})()

// function closeCurrentPage() {
// 	const ua = window.navigator.userAgent
// 	if (ua.indexOf('MSIE') > 0) {
// 		if (ua.indexOf('MSIE 6.0') > 0) {
// 			window.opener = null
// 			window.close()
// 		} else {
// 			window.open('', '_top')
// 			window.top.close()
// 		}
// 	} else {
// 		window.opener = null
// 		window.open('', '_self', '')
// 		window.close()
// 	}
// }
