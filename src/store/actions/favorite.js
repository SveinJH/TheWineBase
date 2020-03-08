import FirestoreService from '../../shared/services/firestoreService';
import * as actionTypes from './actionTypes';

export const favoritesStart = () => {
    return {
        type: actionTypes.FAVORITES_START
    };
};

export const favoritesFail = error => {
    return {
        type: actionTypes.FAVORITES_FAIL,
        error
    };
};

export const favoritesSuccess = (favoriteIds, documentId) => {
    return {
        type: actionTypes.FAVORITES_SUCCESS,
        favoriteIds,
        documentId
    };
};

export const getFavorites = email => {
    return dispatch => {
        FirestoreService.getFavorites(email)
            .then(response => {
                const documentId = response.data[0].document.name.slice(59);
                const values =
                    response.data[0].document.fields.favorites.arrayValue
                        .values;
                let favoriteIds = [];
                if (values) {
                    favoriteIds = values.map(id => {
                        return id.integerValue;
                    });
                }
                dispatch(favoritesSuccess(favoriteIds, documentId));
            })
            .catch(err => {
                console.log(err);
                dispatch(favoritesFail(err));
            });
    };
};

export const updateFavorites = (favoriteIds, documentId) => {
    return dispatch => {
        console.log(documentId);
        dispatch(favoritesStart());
        FirestoreService.updateFavorites(favoriteIds, documentId)
            .then(response => {
                const updatedDocId = response.data.name.slice(59);
                const updatedFavIds = response.data.fields.favorites.arrayValue.values.map(
                    id => {
                        return id.integerValue;
                    }
                );
                console.log(updatedDocId);
                dispatch(favoritesSuccess(updatedFavIds, updatedDocId));
            })
            .catch(err => {
                console.log(err);
                dispatch(favoritesFail(err));
            });
    };
};
