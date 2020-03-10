import * as actionTypes from '../actions/actionTypes';
import { authMapError } from '../../shared/formats/authErrorFormat';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    email: null,
    userCreated: false
};

const authStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null,
        userCreated: false
    };
};

const authFail = (state, action) => {
    return {
        ...state,
        error: { ...action.error, message: authMapError(action.error) },
        loading: false
    };
};

const authCreateSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        userCreated: true
    };
};

const authLoginSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        token: action.idToken,
        userId: action.userId,
        email: action.email
    };
};

const authLogout = (state, action) => {
    return {
        ...initialState
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_CREATE_SUCCESS:
            return authCreateSuccess(state, action);
        case actionTypes.AUTH_LOGIN_SUCCESS:
            return authLoginSuccess(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
