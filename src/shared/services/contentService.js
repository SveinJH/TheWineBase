import { axiosProductDetails, axiosStoreDetails } from '../axios';
import { generateQuery } from '../queries/contentQueries';

class ContentService {
    getProducts = async (query) => {
        const response = await axiosProductDetails.get(generateQuery(query));

        if (query.category) {
            response.data = response.data.filter(
                (product) =>
                    product.classification.mainProductTypeName ===
                    query.category
            );
        }
        return response;
    };

    getProduct = async (id) => {
        const response = await axiosProductDetails.get(`?productId=${id}`);
        return response;
    };

    getProductsByIds = async (ids) => {
        const responses = await ids.map(async (id) => {
            const product = await this.getProduct(id);
            return product.data[0];
        });
        const products = Promise.all(responses);
        return products;
    };

    getStore = async (id) => {
        const response = await axiosStoreDetails.get(`?storeId=${id}`);
        return response;
    };
}

export default new ContentService();
