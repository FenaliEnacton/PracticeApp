import { combineReducers } from 'redux';
import { UserReducer } from '../Reducers/UserReducer'
import { StoreReducer } from '../Reducers/StoreReducer';
export default RootReducer = combineReducers({
    UserReducer, StoreReducer
})