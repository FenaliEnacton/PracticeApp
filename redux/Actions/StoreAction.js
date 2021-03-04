import * as types from '../Constant';

export const Fetch_store_data = (data) => {
    //console.log("Action:", data);
    return {
        type: types.FETCH_STORE_DATA,
        Stores: data
    }
}

export const Request_store_data = () => {
    //console.log("Actionsdfsfsdfdsfdssdfs:");
    return {
        type: types.REQUEST_STORE_DATA,

    }
}

export const Request_store_detail = () => {
    return {
        type: types.REQUEST_STORE_DETAIL,

    }
}

export const Success_store_detail = (data) => {
    //console.log("Action:", data);
    return {
        type: types.SUCCESS_STORE_DETAIL,
        data: data
    }
}