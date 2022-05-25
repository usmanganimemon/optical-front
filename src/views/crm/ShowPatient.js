/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchPrescription } from './../../api/patient'
import PatientAccordian from '../../components/Patient/PatientAccordian'
const ShowPatient = () => {
  const patientId = useParams().id
  // console.log('patientId', patientId)
  const { isLoading, isError, data } = useQuery(['patient', patientId], () =>
    fetchPrescription(patientId),
  )
  useEffect(() => {
    console.log('data', data)
  }, [data])
  return (
    <CRow>
      {data && (
        <CCol xs={12}>
          <CListGroup>
            <CListGroupItem>Name: &nbsp; {data.name}</CListGroupItem>
            <CListGroupItem>Phone: &nbsp;{data.phoneNumber}</CListGroupItem>
            <CListGroupItem>Age: &nbsp;{data.age}</CListGroupItem>
            <CListGroupItem>Email: &nbsp;{data.email}</CListGroupItem>
            <CListGroupItem>Chief Complaint: &nbsp;{data.chiefComplaint}</CListGroupItem>
            <CListGroupItem>Profession: &nbsp;{data.profession}</CListGroupItem>
            <CListGroupItem>Place: &nbsp;{data.place}</CListGroupItem>
          </CListGroup>
        </CCol>
      )}
      {data && data.PatientPrescriptions && (
        <>
          <CCol xs={12}>
            <CAccordion alwaysOpen>
              {data.PatientPrescriptions.map((val, index) => (
                <PatientAccordian key={index} pItemKey={1 + index} data={val} />
              ))}
            </CAccordion>
          </CCol>
        </>
      )}
    </CRow>
  )
}
export default ShowPatient
