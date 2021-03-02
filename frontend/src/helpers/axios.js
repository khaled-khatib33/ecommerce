import axios from 'axios';
import {api} from '../urlConfig';

 const token = window.localStorage.getItem('token')
const axiosIntance = axios.create({

    baseURL:api,
    hesders:{
        'authorization': token ? `bearer ${token}` : ''
    }
});

export default axiosIntance ;