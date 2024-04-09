import App from './App'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.mixin({
	data() {
		return {}
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		uni.showShareMenu({})
		// #endif
	},
	onShareAppMessage(res) {
		return {
			title: '里派物业,快来看看吧!',
			path: '/pages/index/index',
			imageUrl: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/37e8fc22-7550-4d13-82d1-ff7f341fd8a1.png',
			success: function(shareTickets) {
				console.log(shareTickets + '成功');
			},
			fail: function(res) {
				console.log(res + '失败');
			}
		}
	}
})
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