import {
    AddUserRequestAction,
    AddUserSuccessAction,
    DeleteUserRequestAction,
    DeleteUserSuccessAction,
    LoadUsersRequestAction,
    LoadUsersSuccessAction,
    UsersActionTypes,
    SetUserFailureAction,
    UpdateUserRequestAction,
    UpdateUserSuccessAction
} from './usersActionTypes';
import {User} from "../../types/userTypes";

export const loadUsers = (): LoadUsersRequestAction => ({
    type: UsersActionTypes.LOAD_USERS_REQUEST
});

export const loadUsersSuccess = (users:  User[]): LoadUsersSuccessAction => ({
    type: UsersActionTypes.LOAD_USERS_SUCCESS,
    payload: users
});

export const addUser = (user: Omit<User, 'id'>): AddUserRequestAction => ({
    type: UsersActionTypes.ADD_USER_REQUEST,
    payload: user
});

export const addUserSuccess = (user: User): AddUserSuccessAction => ({
    type: UsersActionTypes.ADD_USER_SUCCESS,
    payload: user
});

export const deleteUser = (id: string): DeleteUserRequestAction => ({
    type: UsersActionTypes.DELETE_USER_REQUEST,
    payload: id
});

export const deleteUserSuccess = (id: string): DeleteUserSuccessAction => ({
    type: UsersActionTypes.DELETE_USER_SUCCESS,
    payload: id
});

export const updateUser = (user: User): UpdateUserRequestAction => ({
    type: UsersActionTypes.UPDATE_USER_REQUEST,
    payload: user
});

export const updateUserSuccess = (user: User): UpdateUserSuccessAction => ({
    type: UsersActionTypes.UPDATE_USER_SUCCESS,
    payload: user
});

export const setUserFailure = (message: string): SetUserFailureAction => ({
    type: UsersActionTypes.SET_USER_FAILURE,
    payload: message
});
