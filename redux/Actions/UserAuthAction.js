import * as types from '../Constant';
export const Request_user_login = (email, password) => {
    //console.log("ActionCalled:", email, password);
    return {
        type: types.REQUEST_USER_LOGIN,
        email,
        password
    }
}

export const Success_user_login = (data) => {
    return {
        type: types.SUCCESS_USER_LOGIN,
        user_token: data
    }
}
export const Success_user_fb_login = (data) => {
    //console.log("Action:", data);
    return {
        type: types.SUCCESS_USER_FB_LOGIN,
        user_token: data
    }
}
