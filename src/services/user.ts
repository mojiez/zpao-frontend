import myAxios from '../plugins/myAxios' ;
import { setCurrentUserState } from '../states/user';

export const getCurrentUser = async () => {
    // const res = await myAxios.get()
    const res = await myAxios.get('/user/current');
    if(res.success){
        setCurrentUserState(res.data.currentUser);
        return res.data.currentUser;
    }else{
        // showFailToast('获取用户信息失败');
        return null;
    }
}

