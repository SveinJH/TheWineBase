import { axiosFirestore } from '../axios';
import * as queries from '../queries/firestoreQueries';

class FirestoreService {
    getFavorites = async (email) => {
        const response = await axiosFirestore.post(
            `:runQuery`,
            queries.favorites(email)
        );
        console.log(response);
        return response;
    };

    createUser = async (email) => {
        const response = await axiosFirestore.post(
            `/users`,
            queries.createUser(email)
        );
        console.log(response);
        return response;
    };

    updateFavorites = async (favorites, documentId) => {
        console.log('got req');
        console.log(favorites);
        const response = await axiosFirestore.patch(
            `/users/${documentId}?updateMask.fieldPaths=favorites`,
            queries.updateFavorites(favorites)
        );
        console.log(response);
        return response;
    };
}

export default new FirestoreService();
