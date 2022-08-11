import Vue from 'vue'
import App from './App'
import {
	myRequest
} from '@/common/api.js'

Vue.prototype.$myRequest = myRequest

Vue.filter('formatDate', (date) => {
	const newDate = new Date(date)
	const year = newDate.getFullYear()
	// 时间日期转换
	const mouth = newDate.getMonth().toString().padStart(2, 0)
	const day = newDate.getDay().toString().padStart(2, 0)
	return year + '-' + mouth + '-' + day
})

// #ifndef VUE3

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
