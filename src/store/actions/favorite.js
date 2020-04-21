import FirestoreService from '../../shared/services/firestoreService';
import * as actionTypes from './actionTypes';

export const favoritesStart = () => {
    return {
        type: actionTypes.FAVORITES_START,
    };
};

export const favoritesFail = (error) => {
    return {
        type: actionTypes.FAVORITES_FAIL,
        error,
    };
};

export const favoritesSuccess = (favs, documentId) => {
    return {
        type: actionTypes.FAVORITES_SUCCESS,
        favs,
        documentId,
    };
};

export const getFavorites = (email) => {
    return (dispatch) => {
        FirestoreService.getFavorites(email)
            .then((response) => {
                const documentId = response.data[0].document.name.slice(59);
                const values =
                    response.data[0].document.fields.favorites.arrayValue
                        .values;
                let favs = [];
                if (values) {
                    favs = values.map((fav) => {
                        //return id.integerValue;
                        return {
                            id: fav.mapValue.fields.id.integerValue,
                            rating: fav.mapValue.fields.rating.integerValue,
                        };
                    });
                }
                dispatch(favoritesSuccess(favs, documentId));
            })
            .catch((err) => {
                console.log(err);
                dispatch(favoritesFail(err));
            });
    };
};

export const updateFavorites = (favorites, documentId) => {
    return (dispatch) => {
        console.log(documentId);
        dispatch(favoritesStart());
        FirestoreService.updateFavorites(favorites, documentId)
            .then((response) => {
                const updatedDocId = response.data.name.slice(59);
                console.log(response.data.fields.favorites.arrayValue);
                const values = response.data.fields.favorites.arrayValue.values;
                let updatedFavs = [];
                if (values) {
                    console.log(values);
                    updatedFavs = values.map((fav) => {
                        //return id.integerValue;
                        return {
                            id: fav.mapValue.fields.id.integerValue,
                            rating: fav.mapValue.fields.rating.integerValue,
                        };
                    });
                }
                dispatch(favoritesSuccess(updatedFavs, updatedDocId));
            })
            .catch((err) => {
                console.log(err);
                dispatch(favoritesFail(err));
            });
    };
};
