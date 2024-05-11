import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router.ts';

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);
app.use(router)
app.mount('#app')
