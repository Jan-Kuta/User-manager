import {all} from 'redux-saga/effects';

import usersSaga from './users/users.sagas';

export default function* rootSaga() {
    yield all([
        usersSaga()
    ])
    // code after all-effect
}
