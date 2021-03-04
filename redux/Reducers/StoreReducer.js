import * as types from '../Constant';
const initialstate = {
    stores: [],
    data: [],
    loading: true
}
export const StoreReducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.REQUEST_STORE_DATA:
            return {
                ...state,

            }
        case types.FETCH_STORE_DATA:
            return {
                ...state,
                stores: action.Stores,
                loading: false

            }
            break;

        case types.REQUEST_STORE_DETAIL:
            return {
                ...state
            }
            break;

        case types.SUCCESS_STORE_DETAIL:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default:
            return state;
    }
}