import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { addTeachers } from '../../../../Controllers/Admin';
import "./NewTeacher.css"

class NewTeacher extends React.Component {

  render(){   
    return (
        <Formik
          initialValues={{ firstName: '', lastName: '', middleName: '', birthDate: '', email: '', phoneNumber: '', 
               nationality: '', district: '', village: '', address: '', gender: '', rank: '', subjects: ''
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
  
            
             const temp = localStorage.getItem('data');
             const fines = JSON.parse(temp); 
             const data = {
                 values,
                 schoolId: fines.schoolid
             }

              this.props.goAddTeacher(data);
               setSubmitting(false);
               // resetForm();
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .required('FirstName Required'),
            lastName: Yup.string()
             .required('LastName required'),
            middleName: Yup.string()
             .required('Middle name required'),
            birthDate: Yup.string()
            .required('Date of birth required'),
            email: Yup.string()
            .email()
            .required('Email Required'),
            phoneNumber: Yup.string()
            .required('Phone number is required'),
            nationality: Yup.string()
            .required('Nationality required'),
            district: Yup.string()
            .required('District of residence required'),
            village: Yup.string()
            .required('Name of your village is required'),
            address: Yup.string()
            .required('Address is required'),
            gender: Yup.string()
            .required('Gender required'), 
            rank: Yup.string()
            .required('Rank required'),
            subjects: Yup.string()
            .required(' required')    
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            let form = (
              <div> 
              <div className="newUser">
              <h1 className="newUserTitle">New Teacher</h1>
              <form className="newUserForm" onSubmit={handleSubmit}>
                  <div className="newUserItem">
                      <label htmlFor="FirstName">First Name</label>
                      <input
                          name="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur} 
                      />
                      {errors.firstName && touched.firstName && (
                          <div>{errors.firstName}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                  <label htmlFor="LastName">Last Name</label>
                      <input
                          name="lastName"
                          type="text"
                          placeholder="Enter your Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.lastName && touched.lastName && (
                          <div>{errors.lastName}</div>
                      )}               
                  </div>
                  <div className="newUserItem">
                      <label>Middle Name</label>
                      <input
                          name="middleName"
                          type="text"
                          placeholder="Enter your middle name"
                          value={values.middleName}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.middleName && touched.middleName && (
                          <div>{errors.middleName}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Date Of Birth</label>
                      <input
                          name="birthDate"
                          type="text"
                          placeholder="Enter your date of birth"
                          value={values.birthDate}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.birthDate && touched.birthDate && (
                          <div>{errors.birthDate}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Email</label>
                      <input
                          name="email"
                          type="text"
                          placeholder="Enter your email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.email && touched.email && (
                          <div>{errors.email}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Phone number</label>
                      <input
                          name="phoneNumber"
                          type="text"
                          placeholder="Enter your Last Name"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                          <div>{errors.phoneNumber}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Nationality</label>
                      <input
                          name="nationality"
                          type="text"
                          placeholder="Enter your nationality"
                          value={values.nationality}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.nationality && touched.nationality && (
                          <div>{errors.nationality}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>District</label>
                      <input
                          name="district"
                          type="text"
                          placeholder="Enter your district"
                          value={values.district}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.district && touched.district && (
                          <div>{errors.district}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Village Of Origin</label>
                      <input
                          name="village"
                          type="text"
                          placeholder="Enter name of your village"
                          value={values.village}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.village && touched.village && (
                          <div>{errors.village}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Residential Address</label>
                      <input
                          name="address"
                          type="text"
                          placeholder="Enter your Last Name"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}    
                      />
                      {errors.address && touched.address && (
                          <div>{errors.address}</div>
                      )}
                  </div>
                  <div className="newUserItem">
                      <label>Gender</label>
                      <div className="newUserGender">
                      <select
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: 'block' }}
                      >
                          <option value="" label="Gender" />
                          <option value="Male" label="Male" />
                          <option value="Female" label="Female" />
                      </select>
                      {errors.gender &&
                          touched.gender &&
                          <div className="input-feedback">
                          {errors.gender}
                          </div>}
                      </div>
                  </div>
                  <div className="newUserItem">
                      <label htmlFor="rank" style={{ display: 'block' }}>
                          Rank
                      </label>
                      <select
                          name="rank"
                          value={values.rank}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: 'block' }}
                      >
                          <option value="admin" label="admin" />
                          <option value="PT Head" label="PT Head" />
                          <option value="PT member" label="PT Member" />
                      </select>
                      {errors.rank &&
                          touched.rank &&
                          <div className="input-feedback">
                          {errors.rank}
                          </div>}
                  </div>
                  <div className="newUserItem">
                      <label htmlFor="subjects" style={{ display: 'block' }}>
                          Subjects
                      </label>
                      <select
                          name="subjects"
                          value={values.subjects}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ display: 'block' }}
                      >
                          <option value="Chich1" label="Chich1" />
                          <option value="Chich5" label="Chich5" />
                          <option value="Eng4" label="Eng4" />
                          <option value="Eng8" label="Eng8" />
                      </select>
                      {errors.subjects &&
                          touched.subjects &&
                          <div className="input-feedback">
                          {errors.subjects}
                          </div>}
  
                  </div>
                  <button
                   type="submit"
                   disabled={isSubmitting} 
                   className="newUserButton" 
                   >
                       Create
                  </button>
              </form>
            </div>
          </div>
           );

           if(this.props.loading){
            form = <Spinner animation="grow" variant="success" />
           }
           
           return (
              <div>
                  {form}
                  { this.props.addedTeacherVAR ? 
                                <div>
                                <p>Identity: {this.props.addedTeacherVAR.updatedSignature[0].identity}</p>
                                <p>Password: {this.props.addedTeacherVAR.password}</p>
                                </div>: null
                                }
              </div>
           );
          }}
          </Formik>
       );
  }
}

const mapStateToProps = state => {
    return {
      loading: state.Auth.loading,
      addedTeacherVAR: state.Auth.addedTeacherVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goAddTeacher: (data) => dispatch( addTeachers(data))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewTeacher);