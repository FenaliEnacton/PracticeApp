import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../Constant'
import axios from 'axios';
import Config from '../../config/url_config'
import { Fetch_store_api, Request_store_api } from '../Services/apis';
import { Fetch_store_data, Success_store_detail } from '../Actions/StoreAction';


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

function* Request_Store_Saga() {

    const response = yield call(Request_store_api, Config.API_URL + Config.PUBLIC_PREFIX + '/app/stores');
    if (response.ok) {

        //console.log("Store_More_Info:", response.data.data)
        yield put(Success_store_detail(response.data.data))

    }
    else
        console.log("Request Fail")
}

export default Watcher_Store