import { createApp } from 'vue';
import { Button, Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
// import './style.css'
import App from './App.vue'
import 'vant/lib/index.css'
const app = createApp(App);
// const app = createApp();
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Icon);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);
// app.use(showToast);
app.mount('#app')
