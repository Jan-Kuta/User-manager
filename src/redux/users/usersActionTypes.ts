import {User} from "../../types/userTypes";

export enum UsersActionTypes {
    LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST',
    LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
    ADD_USER_REQUEST = 'ADD_USER_REQUEST',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    SET_USER_FAILURE = 'SET_USER_FAILURE',
}

export type LoadUsersRequestAction = {
    type: typeof UsersActionTypes.LOAD_USERS_REQUEST
};

export type LoadUsersSuccessAction = {
    type: typeof UsersActionTypes.LOAD_USERS_SUCCESS
    payload: User[]
};

export type AddUserRequestAction = {
    type: typeof UsersActionTypes.ADD_USER_REQUEST
    payload: Omit<User, 'id'>
};

export type AddUserSuccessAction = {
    type: typeof UsersActionTypes.ADD_USER_SUCCESS
    payload: User
};

export type DeleteUserRequestAction = {
    type: typeof UsersActionTypes.DELETE_USER_REQUEST
    payload: string
};

export type DeleteUserSuccessAction = {
    type: typeof UsersActionTypes.DELETE_USER_SUCCESS,
    payload: string
};

export type UpdateUserRequestAction = {
    type: typeof UsersActionTypes.UPDATE_USER_REQUEST
    payload: User
};

export type UpdateUserSuccessAction = {
    type: typeof UsersActionTypes.UPDATE_USER_SUCCESS
    payload: User
};

export type SetUserFailureAction = {
    type: typeof UsersActionTypes.SET_USER_FAILURE
    payload: string
}

export type UsersActions =
    | LoadUsersRequestAction
    | LoadUsersSuccessAction
    | AddUserRequestAction
    | AddUserSuccessAction
    | DeleteUserRequestAction
    | DeleteUserSuccessAction
    | UpdateUserRequestAction
    | UpdateUserSuccessAction
    | SetUserFailureAction
