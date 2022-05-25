import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://54.198.190.200:3000',
})
export default instance
