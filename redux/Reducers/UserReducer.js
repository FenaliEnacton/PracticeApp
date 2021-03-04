import * as types from '../Constant';
const initialstate = {
    loading: false,
    user: []
}

export const UserReducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.REQUEST_USER_LOGIN:
            return {
                ...state,
                loading: true
            }
            break;
        case types.SUCCESS_USER_LOGIN:
            //console.log("DataReducer2342424:", action.user_token);
            return {
                ...state,
                user: action.user_token,
                loading: false
            }
            break;
        case types.SUCCESS_USER_FB_LOGIN:
            // console.log('action.user_token', action.user_token)
            return {
                ...state,
                user: action.user_token.email,
                loading: false
            }
            break;
        default:
            //console.log("DataReducer:");
            return state
            break;
    }
}