import {UsersState} from './users.types';
import {UsersActions} from './usersActionTypes';
import {UsersActionTypes} from './usersActionTypes';

const initialState: UsersState = {
    loading: true,
    data: [],
    error: null
};

function usersReducer(state: UsersState = initialState, action: UsersActions): UsersState {
    switch (action.type) {
        case UsersActionTypes.LOAD_USERS_REQUEST:
        case UsersActionTypes.ADD_USER_REQUEST:
        case UsersActionTypes.DELETE_USER_REQUEST:
        case UsersActionTypes.UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case UsersActionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case UsersActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            };

        case UsersActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(user => user.id !== action.payload)
            };

        case UsersActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.map(user => user.id === action.payload.id ? action.payload : user)
            };

        case UsersActionTypes.SET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
}

export default usersReducer
