import { axiosFirestore } from '../axios';
import * as queries from '../queries/firestoreQueries';

class FirestoreService {
    getFavorites = async email => {
        const response = await axiosFirestore.post(
            `:runQuery`,
            queries.favorites(email)
        );
        console.log(response);
        return response;
    };

    createUser = async email => {
        const response = await axiosFirestore.post(
            `/users`,
            queries.createUser(email)
        );
        console.log(response);
        return response;
    };

    updateFavorites = async (favoriteIds, documentId) => {
        const response = await axiosFirestore.patch(
            `/users/${documentId}?updateMask.fieldPaths=favorites`,
            queries.updateFavorites(favoriteIds)
        );
        console.log(response);
        return response;
    };
}

export default new FirestoreService();
