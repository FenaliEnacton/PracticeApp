import * as types from '../Constant';
const initialstate = {
    stores: [],
    data: [],
    filter_data: [],
    loading: true,
    CardLoader: true,
    filterLoader: true
}
export const StoreReducer = (state = initialstate, action) => {
    switch (action.type) {
        //Stores
        case types.REQUEST_STORE_DATA:
            return {
                ...state,
                loading: true,
                CardLoader: false
            }
        case types.FETCH_STORE_DATA:
            return {
                ...state,
                stores: action.Stores,
                loading: false,
                CardLoader: false
            }
            break;

        //data  
        case types.REQUEST_STORE_DETAIL:
            return {
                ...state,
                CardLoader: true,
                //loading: false,
            }
            break;

        case types.SUCCESS_STORE_DETAIL:
            return {
                ...state,
                data: action.data,
                CardLoader: false,
                //loading: false,
            }

        //filter_data
        case types.REQUEST_FILTER_DATA:
            return {
                ...state,
                //loading: false,
                //CardLoader: true,
                filterLoader: true
            }

        case types.SUCCESS_FILTER_DATA:
            return {
                ...state,
                filter_data: action.filtered_coupons,
                //loading: false,
                //CardLoader: false,
                filterLoader: false
            }

        case types.FAILURE_FILTER_DATA:
            return {
                ...state,
                filter_data: [],
                CardLoader: false
            }
        default:
            return state;
    }
}