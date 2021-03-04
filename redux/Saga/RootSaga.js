import { all } from 'redux-saga/effects';
import Watcher_User_Login from './UserSaga';
import Watcher_Store from './StoreSaga';

function* RootSaga() {
    //console.log("Hello From saga");
    yield all([
        Watcher_User_Login(),
        Watcher_Store()
    ])
}

export default RootSaga;