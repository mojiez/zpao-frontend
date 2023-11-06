import { createApp } from 'vue';
import { Button } from 'vant';
import './style.css'
import App from './App.vue'

const app = createApp(App);
// const app = createApp();
app.use(Button);
app.mount('#app')
