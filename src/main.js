import { createApp } from 'vue'
import App from './home.vue'
import JQuery from 'jquery'
import router from './router'


window.$ = window.jQuery = JQuery;
createApp(App).use(router).mount('#app')


