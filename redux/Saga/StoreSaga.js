import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../Constant'
import axios from 'axios';
import Config from '../../config/url_config'
import { Fetch_store_api, Request_store_api } from '../Services/apis';
import { Fetch_store_data, Success_store_detail } from '../Actions/StoreAction';
import { NavigationContainer } from '@react-navigation/native';


const rootAPI = axios.create({
    baseURL: "https://api-procash.enactweb.com"
})

function* Watcher_Store() {
    yield takeEvery(types.REQUEST_STORE_DATA, Fetch_Store_Saga);
    yield takeEvery(types.REQUEST_STORE_DETAIL, Request_Store_Saga);

}

function* Fetch_Store_Saga() {
    try {
        const response = yield call(Fetch_store_api, '/public/home')
        if (!response?.problem) {
            yield put(Fetch_store_data(response))
        }
        //console.log("response", response)

    }
    catch (error) {
        console.log("error")
    }

}

function* Request_Store_Saga(action) {

    const response = yield call(Request_store_api, Config.CASHBEEZ_URL + Config.PUBLIC_PREFIX + '/app/storeInfo/' + action.store_id);
    //console.log("Request_saga", response)
    if (response.ok) {

        //console.log("Store_More_Info:", response.data.data)
        yield put(Success_store_detail(response.data.data))
        action.navigation.navigate('StoresDetails', { itemId: response.data.data })

    }
    else
        console.log("Request Fail")
}

export default Watcher_Store