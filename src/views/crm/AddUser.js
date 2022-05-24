import React, { useState } from 'react'
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
} from '@coreui/react'
const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    profession: '',
    chiefComplaint: '',
    place: '',
    rightSph: '',
    rightCyl: '',
    rightAxis: '',
    rightAdd: '',
    leftSph: '',
    leftCyl: '',
    leftAxis: '',
    leftAdd: '',
  })
  const handleInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <CForm>
      <CRow>
        <CCol sm="6">
          <CFormLabel>Name</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="text"
              onChange={handleInput}
              name="name"
              value={user.name}
              placeholder="Name"
            />
          </CInputGroup>
          <CFormLabel>Email</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="email"
              onChange={handleInput}
              name="email"
              value={user.email}
              placeholder="Email"
            />
          </CInputGroup>
          <CFormLabel>Phone Number</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="text"
              onChange={handleInput}
              name="phoneNumber"
              value={user.phoneNumber}
              placeholder="Phone Number"
            />
          </CInputGroup>
          <CFormLabel>Age</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="text"
              onChange={handleInput}
              name="age"
              value={user.age}
              placeholder="Age"
            />
          </CInputGroup>
          <CFormLabel>Profession</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="text"
              onChange={handleInput}
              name="profession"
              value={user.profession}
              placeholder="Profession"
            />
          </CInputGroup>
          <CFormLabel>Chief Complaint</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormTextarea
              rows="3"
              onChange={handleInput}
              name="chiefComplaint"
              value={user.chiefComplaint}
              placeholder="Chief Complaint"
            ></CFormTextarea>
          </CInputGroup>
          <CFormLabel>Place</CFormLabel>
          <CInputGroup className="mb-3">
            <CFormInput
              type="text"
              placeholder="Place"
              onChange={handleInput}
              name="place"
              value={user.place}
            />
          </CInputGroup>
        </CCol>
        <CCol sm="6">
          <CCard>
            <CCardBody>
              <CCardTitle>Right</CCardTitle>
              <span style={{ width: '70px', display: 'inline-block' }}>Sph</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Cyl</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Axis</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Add</span>
              <br />
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="rightSph"
                value={user.rightSph}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="rightCyl"
                value={user.rightCyl}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="rightAxis"
                value={user.rightAxis}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="rightAdd"
                value={user.rightAdd}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              <CCardTitle>Left</CCardTitle>
              <span style={{ width: '70px', display: 'inline-block' }}>Sph</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Cyl</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Axis</span>
              <span style={{ width: '70px', display: 'inline-block' }}>Add</span>
              <br />
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="leftSph"
                value={user.leftSph}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="leftCyl"
                value={user.leftCyl}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="leftAxis"
                value={user.leftAxis}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
              <CFormInput
                className="me-1"
                onChange={handleInput}
                name="leftAdd"
                value={user.leftAdd}
                style={{ width: '60px', display: 'inline-block' }}
              ></CFormInput>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol
          sm="6"
          className="mb-2 mt-2"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <CButton color="primary" className="text-center">
            Save
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddUser
