import React from 'react'
import {
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroupItem,
} from '@coreui/react'
const PatientAccordian = ({ pItemKey, data }) => {
  return (
    <>
      <CAccordionItem itemKey={pItemKey}>
        <CAccordionHeader>27/02/2022 - New Optic Palace</CAccordionHeader>
        <CAccordionBody>
          <CRow>
            <CCol xs={6}>
              <CCard>
                <CCardBody>
                  <CCardTitle>Left</CCardTitle>
                  <CCardText>
                    <CListGroupItem>Sph:&nbsp; {data.leftSph}</CListGroupItem>
                    <CListGroupItem>Cyl:&nbsp; {data.leftCyl}</CListGroupItem>
                    <CListGroupItem>Axis:&nbsp; {data.leftAxis}</CListGroupItem>
                    <CListGroupItem>Add:&nbsp; {data.leftAdd}</CListGroupItem>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs={6}>
              <CCard>
                <CCardBody>
                  <CCardTitle>Right</CCardTitle>
                  <CCardText>
                    <CListGroupItem>Sph:&nbsp; {data.rightSph}</CListGroupItem>
                    <CListGroupItem>Cyl:&nbsp; {data.rightCyl}</CListGroupItem>
                    <CListGroupItem>Axis:&nbsp; {data.rightAxis}</CListGroupItem>
                    <CListGroupItem>Add:&nbsp; {data.rightAdd}</CListGroupItem>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CAccordionBody>
      </CAccordionItem>
    </>
  )
}
export default PatientAccordian
