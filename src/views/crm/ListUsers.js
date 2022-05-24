import React from 'react'
import {
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
  CLink,
} from '@coreui/react'
import { useQuery } from 'react-query'
import { fetchPatients } from './../../api/patient'
const ListUsers = () => {
  const { isLoading, isError, data } = useQuery('patient', fetchPatients)
  if (isLoading) {
    return <CSpinner />
  }
  if (isError) {
    return <h2>Something Went wrong....</h2>
  }
  return (
    <CRow>
      <CCol>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Phone Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Place</CTableHeaderCell>
              <CTableHeaderCell scope="col">Profession</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data &&
              data.map((val, index) => (
                <CTableRow key={val.id}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>
                    <CLink href={`/#/patient/${val.id}`}>{val.name}</CLink>
                  </CTableDataCell>
                  <CTableDataCell>{val.email}</CTableDataCell>
                  <CTableDataCell>{val.phoneNumber}</CTableDataCell>
                  <CTableDataCell>{val.place}</CTableDataCell>
                  <CTableDataCell>{val.profession}</CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </CCol>
    </CRow>
  )
}
export default ListUsers
