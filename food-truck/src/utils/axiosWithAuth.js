import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://foodtrucktrackerbw.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
};

export default axiosWithAuth;