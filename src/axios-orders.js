import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://projects.codeandtrust.com/api/'
});

export default instance;