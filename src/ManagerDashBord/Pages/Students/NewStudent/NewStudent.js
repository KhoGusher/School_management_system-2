import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { addStudent } from '../../../../Controllers/Admin';
import "./NewStudent.css"

class NewStudent extends React.Component {
  
    render(){
         return (
              <Formik
                  initialValues={{ firstName: '', lastName: '', middleName: '', birthDate: '', regNumber: '', classi: '', village: '', 
                  gender: '', nationality: '', district: '', address: '', guardianNumber: '',
                  category: '',  countAttempts: '', idPhoto: '', signature: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    this.props.goAddStudent(values);
                              
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
                    regNumber: Yup.string()
                    .required(' Required'),
                    classi: Yup.string()
                    .required('Class required'),
                    village: Yup.string()
                    .required(' required'),
                    gender: Yup.string()
                    .required(' required'),
                    nationality: Yup.string()
                    .required(' required'),
                    district: Yup.string()
                    .required('required'),
                    address: Yup.string()
                    .required('Address is required'),
                    guardianNumber: Yup.string()
                    .required(' required'), 
                    category: Yup.string()
                    .required(' required'),
                    countAttempts: Yup.string()
                    .required(' required'),
                    idPhoto: Yup.string()
                    .required(' required'),
                    signature: Yup.string()
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
                    <div className="teacherUpdate">
                        <div className="userUpdate">
                            <span className="userUpdateTitle">New student dashboard</span>
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
                                        <label>Reg Number</label>
                                        <input
                                                name="regNumber"
                                                type="text"
                                                placeholder="Reg number"
                                                value={values.regNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.regNumber && touched.regNumber && (
                                                <div>{errors.regNumber}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Class</label>
                                        <input
                                                name="classi"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.classi}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.classi && touched.classi && (
                                                <div>{errors.classi}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Village</label>
                                        <input
                                                name="village"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.village}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.village && touched.village && (
                                                <div>{errors.village}</div>
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
                                        <label>Nationality</label>
                                        <input
                                                name="nationality"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.nationality}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.nationality && touched.nationality && (
                                                <div>{errors.nationality}</div>
                                            )}
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
                                        <label>Address</label>
                                        <input
                                                name="address"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.address && touched.address && (
                                                <div>{errors.address}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Guardian number</label>
                                        <input
                                                name="guardianNumber"
                                                type="text"
                                                placeholder="Enter name of your guardianNumber"
                                                value={values.guardianNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.guardianNumber && touched.guardianNumber && (
                                                <div>{errors.guardianNumber}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Category</label>
                                        <input
                                                name="category"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.category && touched.category && (
                                                <div>{errors.category}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Count attempts</label>
                                        <input
                                                name="countAttempts"
                                                type="text"
                                                placeholder="Enter your Last Name"
                                                value={values.countAttempts}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.countAttempts && touched.countAttempts && (
                                                <div>{errors.countAttempts}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Id photo</label>
                                        <input
                                                name="idPhoto"
                                                type="text"
                                                placeholder="Enter your idPhoto"
                                                value={values.idPhoto}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.idPhoto && touched.idPhoto && (
                                                <div>{errors.idPhoto}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Signature</label>
                                        <input
                                                name="signature"
                                                type="text"
                                                placeholder="Enter your signature"
                                                value={values.signature}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.signature && touched.signature && (
                                                <div>{errors.signature}</div>
                                            )}
                                    </div>
                                     
                                    <button
                                        type="submit"
                                        disabled={isSubmitting} 
                                        className="newUserButton" 
                                        >
                                            Create
                                        </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        );

                                        if(this.props.loading){
                                            form = <Spinner animation="grow" variant="success" />
                                        }
                            return (
                                <div className="teacher">
                                <div className="teacherTitleContainer">
                                <h3 className="teacherTitle">Adding Student</h3>
                                <Link to="/Home">
                                    <button className="teacherAddBtn">Update</button>
                                </Link>
                                </div>
                                {form}
                                { this.props.addedStudentVAR ? 
                                <div>
                                <p>Identity: {this.props.addedStudentVAR.updatedSignature[0].identity}</p>
                                <p>Password: {this.props.addedStudentVAR.password}</p>
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
      addedStudentVAR: state.Admin.addedStudentVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goAddStudent: (values) => dispatch( addStudent(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);