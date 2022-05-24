import apiInstance from './index'
export const loginApi = (data) => {
  return apiInstance.post('/login', data)
}
