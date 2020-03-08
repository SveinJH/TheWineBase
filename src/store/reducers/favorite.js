import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favoriteIds: [],
    error: null,
    loading: false,
    documentId: null
};

const favoritesStart = (state, action) => {
    return { ...state, loading: true, error: null };
};

const favoritesFail = (state, action) => {
    return { ...state, loading: false, error: action.error };
};

const favoritesSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        favoriteIds: action.favoriteIds,
        documentId: action.documentId
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FAVORITES_START:
            return favoritesStart(state, action);
        case actionTypes.FAVORITES_FAIL:
            return favoritesFail(state, action);
        case actionTypes.FAVORITES_SUCCESS:
            return favoritesSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
