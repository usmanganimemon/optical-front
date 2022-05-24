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
            <CListGroupItem>Name: {data.name}</CListGroupItem>
            <CListGroupItem>Phone:</CListGroupItem>
            <CListGroupItem>Age:</CListGroupItem>
            <CListGroupItem>Email</CListGroupItem>
            <CListGroupItem>Chief Complaint: </CListGroupItem>
            <CListGroupItem>Profession: </CListGroupItem>
            <CListGroupItem>Place: </CListGroupItem>
          </CListGroup>
        </CCol>
      )}
      {data && data.PatientPrescriptions && (
        <>
          <CCol xs={12}>
            <CAccordion alwaysOpen>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>27/02/2022 - New Optic Palace</CAccordionHeader>
                <CAccordionBody>
                  <CRow>
                    <CCol xs={6}>
                      <CCard>
                        <CCardBody>
                          <CCardTitle>Left</CCardTitle>
                          <CCardText>
                            <CListGroupItem>Sph:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Cyl:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Axis:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Add:&nbsp; 12</CListGroupItem>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol xs={6}>
                      <CCard>
                        <CCardBody>
                          <CCardTitle>Right</CCardTitle>
                          <CCardText>
                            <CListGroupItem>Sph:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Cyl:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Axis:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Add:&nbsp; 12</CListGroupItem>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>27/02/2022 - New Optic Palace</CAccordionHeader>
                <CAccordionBody>
                  <CRow>
                    <CCol xs={6}>
                      <CCard>
                        <CCardBody>
                          <CCardTitle>Left</CCardTitle>
                          <CCardText>
                            <CListGroupItem>Sph:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Cyl:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Axis:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Add:&nbsp; 12</CListGroupItem>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol xs={6}>
                      <CCard>
                        <CCardBody>
                          <CCardTitle>Right</CCardTitle>
                          <CCardText>
                            <CListGroupItem>Sph:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Cyl:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Axis:&nbsp; 12</CListGroupItem>
                            <CListGroupItem>Add:&nbsp; 12</CListGroupItem>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCol>
        </>
      )}
    </CRow>
  )
}
export default ShowPatient
