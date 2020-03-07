import { axiosProductDetails } from '../axios';

class ContentService {
    getProducts = async query => {
        const response = await axiosProductDetails.get(
            '?maxResults=20&start=600'
        );

        if (query.category) {
            response.data = response.data.filter(
                product =>
                    product.classification.mainProductTypeName ===
                    query.category
            );
        }
        return response;
    };

    getProduct = async id => {
        const response = await axiosProductDetails.get(`?productId=${id}`);
        return response;
    };
}

export default new ContentService();
