import axios from "axios";
const instance = axios.create({
    baseUrl: 'http://localhost:5001/clone-cfc7a/us-central1/api' // API URLS (cloud function url)
});

export default instance