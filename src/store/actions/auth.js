import * as actionTypes from './actionTypes';
import AuthService from '../../shared/services/authService';
import FirestoreService from '../../shared/services/firestoreService';

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

export const authLoginSuccess = userData => {
    return {
        type: actionTypes.AUTH_LOGIN_SUCCESS,
        idToken: userData.token,
        userId: userData.userId,
        email: userData.email
    };
};

export const createUser = userData => {
    return dispatch => {
        dispatch(authStart());
        AuthService.createUser(userData)
            .then(response => {
                /* const expirationDate = new Date(
                    new Date().getTime() + response.data.expiresIn * 1000
                ); */
                FirestoreService.createUser(userData.email).catch(err => {
                    console.log(err);
                });
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
    return dispatch => {
        dispatch(authStart());
        AuthService.loginUser(userData)
            .then(async response => {
                const data = {
                    token: response.data.idToken,
                    userId: response.data.localId,
                    email: userData.email
                };
                const isVerified = await AuthService.userIsVerified(data.token);
                if (isVerified) {
                    dispatch(authLoginSuccess(data));
                } else {
                    dispatch(authFail({ message: 'Bruker ikke bekreftet' }));
                }
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};
