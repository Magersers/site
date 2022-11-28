import { createApp } from 'vue';
import App from './home.vue';
import JQuery from 'jquery';
import router from './router';
import {createPinia} from 'pinia';
import GoogleSignInPlugin from "vue3-google-signin";


const pinia = createPinia();

window.$ = window.jQuery = JQuery;


createApp(App)
.use(router)
.use(pinia)
.use(GoogleSignInPlugin, {
    clientId: '452442277466-lv8ch0a7gookt6acak1ksk28fg69rmn9.apps.googleusercontent.com'
  })
.mount('#app');

