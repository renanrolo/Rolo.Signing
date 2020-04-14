import Axios from 'axios';

const api = Axios.create({baseURL: process.env.REACT_APP_API_ENDPOINT})

export default api;