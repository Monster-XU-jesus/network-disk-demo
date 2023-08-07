import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router';

const app = createApp(App);

app.use(router);
app.use(ElementUI);
app.mount('#app');
