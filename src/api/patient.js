import apiInstance from './index'
export const fetchPatients = () => {
  return apiInstance.get('/patient').then(({ data }) => data.data)
}
export const fetchPrescription = async (id) => {
  const { data } = await apiInstance.get(`/patient/precription?patientId=${id}`)
  return data.data
}
