// import { Search } from 'vant';
import Index from '../pages/index.vue';
import Team from '../pages/Team.vue';
import User from '../pages/User.vue';
import SearchPage from '../pages/searchPage.vue';
import UserEditPage from '../pages/UserEditPage.vue';
const routes = [
    {path: '/',component: Index},
    {path: '/team',component: Team},
    {path: '/user',component: User},
    {path: '/user/edit',component: UserEditPage},
    {path: '/search',component: SearchPage},
]

export default routes;