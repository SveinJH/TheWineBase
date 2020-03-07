import { axiosAuthentication } from '../axios';

class AuthService {
    createUser = async userData => {
        const response = await axiosAuthentication.post(
            `:signUp?key=${process.env.REACT_APP_FB_KEY}`,
            userData
        );
        return response;
    };

    loginUser = async userData => {
        const response = await axiosAuthentication.post(
            `:signInWithPassword?key=${process.env.REACT_APP_FB_KEY}`,
            userData
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
}

export default new AuthService();
