import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../Constant'
import apisauce from 'apisauce';
import { Success_user_login } from '../Actions/UserAuthAction';
import { user_auth_api } from '../Services/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootApi = apisauce.create({
    baseURL: "https://api-procash.enactweb.com",
    headers: {
        'Cache-Control': 'no-cache',
    },
    // timeout: 10000,
});

function* Watcher_User_Login() {
    yield takeEvery(types.REQUEST_USER_LOGIN, Request_User_login);
}

function* Request_User_login(action) {
    try {
        const response = yield call(user_auth_api, 'auth/login', {
            email: action.email,
            password: action.password,
        });

        //console.log("Response data:", response.data.data);
        yield put(Success_user_login(response.data.data));
        if (response?.data?.data?.message != null || response?.data?.data?.message != undefined) {
            AsyncStorage.setItem('Auth', "0");
        }
        else {
            AsyncStorage.setItem('Auth', response.data.data);
        }
    }
    catch (error) {
        console.log("Error :", error);
    }
}



export default Watcher_User_Login;