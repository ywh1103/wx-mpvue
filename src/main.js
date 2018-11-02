import Vue from 'vue'
import App from './App'
import dayjs from 'dayjs'
import Http from './utils/http'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$Http=Http;

const app = new Vue(App)
app.$mount()
