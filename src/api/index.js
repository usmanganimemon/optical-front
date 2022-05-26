import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://52.44.72.94/api',
})
export default instance
