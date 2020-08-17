import { axiosFirestore } from '../axios';
import * as queries from '../queries/firestoreQueries';

class FirestoreService {
    getFavorites = async (email) => {
        const response = await axiosFirestore.post(
            `:runQuery`,
            queries.favorites(email)
        );
        return response;
    };

    createUser = async (email) => {
        const response = await axiosFirestore.post(
            `/users`,
            queries.createUser(email)
        );
        return response;
    };

    updateFavorites = async (favorites, documentId) => {
        const response = await axiosFirestore.patch(
            `/users/${documentId}?updateMask.fieldPaths=favorites`,
            queries.updateFavorites(favorites)
        );
        return response;
    };
}

export default new FirestoreService();
