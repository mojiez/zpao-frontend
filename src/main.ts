import { createApp } from 'vue';
import { Button, Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import * as VueRouter from 'vue-router';
import routes from './config/router';
// import './style.css'
import App from './App.vue'
import 'vant/lib/index.css'
const app = createApp(App);
// const app = createApp();
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:routes,
})
// 引入vue-router的组件

app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Icon);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);
app.use(router);
// app.use(showToast);
app.mount('#app')
