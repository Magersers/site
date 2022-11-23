import { createApp } from 'vue';
import App from './home.vue';
import JQuery from 'jquery';
import router from './router';
import {createPinia} from 'pinia';


const pinia = createPinia();

window.$ = window.jQuery = JQuery;

createApp(App)
.use(router)
.use(pinia)
.mount('#app');


