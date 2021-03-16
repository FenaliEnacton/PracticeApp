import * as types from '../Constant';

export const Fetch_store_data = (data) => {
    //console.log("Action:", data);
    return {
        type: types.FETCH_STORE_DATA,
        Stores: data,
        loading: false
    }
}

export const Request_store_data = () => {
    //console.log("Actionsdfsfsdfdsfdssdfs:");
    return {
        type: types.REQUEST_STORE_DATA,
        loading: true
    }
}

export const Request_store_detail = (data, navigation) => {
    return {
        type: types.REQUEST_STORE_DETAIL,
        store_id: data,
        navigation: navigation,

    }
}

export const Success_store_detail = (data) => {
    //console.log("Action:", data);
    return {
        type: types.SUCCESS_STORE_DETAIL,
        data: data
    }
}

export const Request_Filter_data = (cats, stores, show_type, order_type, page_no, per_page, navigation) => {
    return {
        type: types.REQUEST_FILTER_DATA,
        cats,
        stores,
        show_type,
        order_type,
        page_no,
        per_page,
        navigation
        //loading: true
    }
}

export const Success_Filter_data = (data) => {
    //console.log("Action:", data);
    return {
        type: types.SUCCESS_FILTER_DATA,
        filtered_coupons: data,
        //loading: false
    }
}

export const Failure_Filter_data = (data) => {
    //console.log("Action:", data);
    return {
        type: types.FAILURE_FILTER_DATA,

        //loading: false
    }
}
