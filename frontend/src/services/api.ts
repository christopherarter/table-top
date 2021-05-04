import axios from 'axios';

/**
 * Scaffold any http client
 * defaults here.
 */
const api = axios.create({
        baseURL: process.env.API_URL || 'http://localhost:9000/api/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

export default api;
