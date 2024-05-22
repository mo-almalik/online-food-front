import axios from "axios";

const token = localStorage.getItem('auth');
const baseURL = 'http://localhost:3001/v1'

const api = axios.create({baseURL ,headers:{
    token : `Bearer ${token}`
}})


export default api