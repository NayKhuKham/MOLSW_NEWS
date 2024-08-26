import './bootstrap';


import { createApp } from 'vue';
import App from './App.vue'
import router from './Router';
import Sidemenu from './Components/Sidemenu.vue';


const app = createApp(App);
app.component("Sidemenu",Sidemenu);
app.use(router);
app.mount('#app-vue');
