import * as actionTypes from './actionTypes';
import AuthService from '../../shared/services/authService';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const authCreateSuccess = () => {
    return {
        type: actionTypes.AUTH_CREATE_SUCCESS
    };
};

export const authLoginSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_LOGIN_SUCCESS,
        idToken: token,
        userId
    };
};

export const createUser = userData => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            ...userData,
            returnSecureToken: true
        };
        AuthService.createUser(data)
            .then(response => {
                /* const expirationDate = new Date(
                    new Date().getTime() + response.data.expiresIn * 1000
                ); */
                AuthService.sendVerificationEmail(response.data.idToken)
                    .then(response => {
                        dispatch(authCreateSuccess());
                    })
                    .catch(err => {
                        dispatch(authFail(err.response.data.error));
                    });
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const loginUser = userData => {
    return dispatch => {};
};
