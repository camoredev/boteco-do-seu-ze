import axios from 'axios';

const api = axios.create({baseURL: 'https://backend-botecodoseuze-production.up.railway.app/'});
 
export default api;