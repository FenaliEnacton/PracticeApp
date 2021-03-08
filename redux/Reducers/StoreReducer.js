import * as types from '../Constant';
const initialstate = {
    stores: [],
    data: [],
    loading: true
}
export const StoreReducer = (state = initialstate, action) => {
    switch (action.type) {
        // case types.REQUEST_STORE_DATA:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        case types.FETCH_STORE_DATA:
            //console.log("Before Called Reducer:", state.loading);
            return {
                ...state,
                stores: action.Stores,
                loading: false

            }
            break;

        case types.REQUEST_STORE_DETAIL:
            return {
                ...state,
                loading: true
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