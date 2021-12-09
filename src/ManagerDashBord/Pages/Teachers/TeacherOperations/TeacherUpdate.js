import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { editTeacher } from '../../../../Controllers/Admin';
import "./TeacherUpdate.css"

class TeacherUpdate extends React.Component {
  
    render(){
        // teacher details we need to update
             const td = this.props.location.state == undefined ? null: this.props.location.state.teacher;
            return (
                <Formik
                  initialValues={{ firstName: td ? `${td.firstname}`: '', lastName: td ? `${td.lastname}`: '', middleName: td ? `${td.middlename}`: '', birthDate: td ? `${td.birthdate}`: '', email: td ? `${td.email}`: '', phoneNumber: td ? `${td.phonenumber}`: '', 
                       nationality: td ? `${td.nationality}`: '', district: td ? `${td.district}`: '', village: td ? `${td.village}`: '', address: td ? `${td.address}`: '', gender: td ? `${td.gender}`: '', rank: td ? `${td.rank}`: '', subjects: td ? `${td.subjects}`: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    const data = {
                        values,
                        td: td.teacherid
                    }
                    this.props.goEditTeacher(data);
                              
                    setSubmitting(false);
                      resetForm();
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
                    .required('Gender required')    
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
                    <div className="teacherUpdate">
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm" onSubmit={handleSubmit}>
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label className="teacherlabes">FistName</label>
    
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
                                    <div className="userUpdateItem">
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
                                    <div className="userUpdateItem">
                                        <label>Last Name</label>
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
                                    <div className="userUpdateItem">
                                        <label>D.O.B</label>
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
                                    <div className="userUpdateItem">
                                        <div className="gender">
                                            <label>Gender</label>
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
                                    <div className="userUpdateItem">
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
                                    <div className="userUpdateItem">
                                        <label>Village</label>
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
                                    <div className="userUpdateItem">
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
                                    <div className="userUpdateItem">
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
                                    <div className="userUpdateItem">
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
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
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
                                    <div className="userUpdateItem">
                                        <label>Subjects : </label>
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
                      Update
                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                  );

                  if(this.props.loading){
                    form = <Spinner animation="grow" variant="success" />
                  }
                  if(this.props.editedTeacher){
                      this.props.history.push("/teachers");
                  }
                  return (
                    <div className="teacher">
                    
                      {form}
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
      editedTeacher: state.Admin.editedTeacher
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goEditTeacher: (values) => dispatch( editTeacher(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherUpdate);