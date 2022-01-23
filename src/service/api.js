import axios from "axios"


const url = 'http://localhost:5000';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
        // console.log('Registered');
    } catch (error) {
        console.log('errors while calling signup api');
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}