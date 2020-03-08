import { axiosAuthentication } from '../axios';

class AuthService {
    createUser = async userData => {
        const response = await axiosAuthentication.post(
            `:signUp?key=${process.env.REACT_APP_FB_KEY}`,
            { ...userData, returnSecureToken: true }
        );
        return response;
    };

    loginUser = async userData => {
        const response = await axiosAuthentication.post(
            `:signInWithPassword?key=${process.env.REACT_APP_FB_KEY}`,
            { ...userData, returnSecureToken: true }
        );
        console.log(response);
        return response;
    };

    sendVerificationEmail = async idToken => {
        console.log('verifying user...');
        const response = await axiosAuthentication.post(
            `:sendOobCode?key=${process.env.REACT_APP_FB_KEY}`,
            { idToken, requestType: 'VERIFY_EMAIL' }
        );
        console.log(response);
        return response;
    };

    getUserData = async idToken => {
        const response = await axiosAuthentication.post(
            `:lookup?key=${process.env.REACT_APP_FB_KEY}`,
            { idToken }
        );
        console.log(response);
        return response;
    };

    userIsVerified = async idToken => {
        const response = await this.getUserData(idToken);
        console.log(response.data);
        return response.data.users[0].emailVerified;
    };
}

export default new AuthService();
