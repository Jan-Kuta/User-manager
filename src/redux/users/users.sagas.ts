import {all, fork, put, takeLatest} from 'redux-saga/effects';
import {
    AddUserRequestAction,
    DeleteUserRequestAction,
    UsersActionTypes,
    UpdateUserRequestAction
} from "./usersActionTypes";
import {
    addUserSuccess,
    deleteUserSuccess,
    loadUsers,
    loadUsersSuccess,
    setUserFailure,
    updateUserSuccess
} from "./users.actions";

const apiRoot = process.env.API_URL || 'https://api.mocki.io/v1/d88e9428';

function* loadUsersRequest() {
    try {
        const res = yield fetch(`${apiRoot}`);
        const data = yield res.json();
        yield put(loadUsersSuccess(data))
    } catch (err) {
        yield put(setUserFailure(err))
    }
}

function* addUserRequest(action: AddUserRequestAction) {
    console.log('Creating user', action.payload);
    yield put(addUserSuccess({...action.payload, id: new Date().toISOString()}));
}

function* deleteUserRequest(action: DeleteUserRequestAction) {
    console.log('Deleting user', action.payload);
    yield put(deleteUserSuccess(action.payload));
}

function* updateUserRequest(action: UpdateUserRequestAction) {
    console.log('Updating user', action.payload);
    yield put(updateUserSuccess(action.payload));
}

function* initialSaga() {
    yield put(loadUsers());
}

export default function* usersSaga() {
    yield fork(initialSaga);
    yield all([
        takeLatest(UsersActionTypes.LOAD_USERS_REQUEST, loadUsersRequest),
        takeLatest(UsersActionTypes.ADD_USER_REQUEST, addUserRequest),
        takeLatest(UsersActionTypes.DELETE_USER_REQUEST, deleteUserRequest),
        takeLatest(UsersActionTypes.UPDATE_USER_REQUEST, updateUserRequest)
    ])
}
