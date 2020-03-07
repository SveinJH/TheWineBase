import axios from 'axios';

const headers = {
    'Ocp-Apim-Subscription-Key': '981e9814ece14d8e82a56d1cddc28bf0'
};

const axiosProductDetails = axios.create({
    baseURL: 'https://apis.vinmonopolet.no/products/v0/details-normal',
    headers: {
        ...headers
    }
});

const axiosAuthentication = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
});

export { axiosProductDetails, axiosAuthentication };
