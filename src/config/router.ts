// import { Search } from 'vant';
import Index from '../pages/index.vue';
import Team from '../pages/Team.vue';
import User from '../pages/User.vue';
import SearchPage from '../pages/searchPage.vue';
import UserEditPage from '../pages/UserEditPage.vue';
import searchResultPage from '../pages/searchResultPage.vue';
import userLoginPage from '../pages/userLoginPage.vue';
import teamAddPage from '../pages/teamAddPage.vue';

const routes = [
    {path: '/',component: Index},
    {path: '/team',component: Team},
    {path: '/user',component: User},
    {path: '/user/edit',component: UserEditPage},
    {path: '/search',component: SearchPage},
    {path: '/searchresult',component: searchResultPage},
    {path: '/login', component: userLoginPage},
    {path: '/addteam', component: teamAddPage},
]

export default routes;