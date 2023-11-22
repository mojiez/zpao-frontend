import {userType} from '../assets/user';

let currentUser:userType;

const setCurrentUserState = (User:userType) => {
    currentUser = User;
}

const getCurrentUserState = () => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCurrentUserState,
}