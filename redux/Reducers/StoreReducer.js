import * as types from '../Constant';
const initialstate = {
    stores: [],
    data: [],
    loading: true,
    CardLoader: true
}
export const StoreReducer = (state = initialstate, action) => {
    switch (action.type) {
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

        case types.REQUEST_STORE_DETAIL:
            return {
                ...state,
                CardLoader: true,
                loading: false,
            }
            break;

        case types.SUCCESS_STORE_DETAIL:
            return {
                ...state,
                data: action.data,

                CardLoader: false,
                loading: false,
            }
        default:
            return state;
    }
}