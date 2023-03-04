import { createApp } from 'vue';
import { App } from './App';
import { router } from './router';
import 'virtual:svg-icons-register'

const app = createApp(App);
app.use(router);
app.mount('#app');