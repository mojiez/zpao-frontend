import { createApp } from 'vue';
import { Button, Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { Card } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Tag } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
// import { CellGroup } from 'vant';
import * as VueRouter from 'vue-router';
import routes from './config/router';
// import './style.css'
import App from './App.vue'
import Search from 'vant';
import { Divider } from 'vant';
import { TreeSelect } from 'vant';
import { Col, Row } from 'vant';
import { Skeleton } from 'vant';
// import { Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css'
const app = createApp(App);
// const app = createApp();
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:routes,
})
// 引入vue-router的组件

app.use(Button);
app.use(Divider);
app.use(TreeSelect);
app.use(Tag);
app.use(Row);
app.use(Col);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Icon);
app.use(Skeleton);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(router);
app.use(Card);
// app.use(showToast);
app.mount('#app')
