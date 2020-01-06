import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: '',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
};

export default axiosWithAuth;