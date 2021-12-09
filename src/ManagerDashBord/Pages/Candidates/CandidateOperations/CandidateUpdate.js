import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { editCandidate } from '../../../../Controllers/Admin';
import "./CandidateDetails.css"

class CandidateUpdate extends React.Component {
  
    render(){
        // teacher details we need to update
             const td = this.props.location.state == undefined ? null: this.props.location.state.student;
            return (
                <Formik
                  initialValues={{ firstName: td ? `${td.firstname}`: '', lastName: td ? `${td.lastname}`: '', middleName: td ? `${td.middlename}`: '', 
                  birthDate: td ? `${td.birthdate}`: '', regNumber: td ? `${td.regnumber}`: '', classi: td ? `${td.class}`: '',
                  village: td ? `${td.village}`: '', gender: td ? `${td.gender}`: '', nationality: td ? `${td.nationality}`: '',
                  district: td ? `${td.district}`: '', address: td ? `${td.address}`: '', guardianNumber: td ? `${td.guardiannumber}`: '',
                  category: td ? `${td.category}`: '',  countAttempts: td ? `${td.countattempts}`: '', idPhoto: td ? `${td.idphoto}`: '',
                  signature: td ? `${td.signature}`: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    const data = {
                        values,
                        td: td.studentid
                    }
                    this.props.goEditCandidate(data);
                              
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
                                if(this.props.editedCandidateVAR){
                                    this.props.history.push("/candidates");
                                }
                            return (
                                <div className="teacher">
                                <div className="teacherTitleContainer">
                                <h3 className="teacherTitle">Student Details</h3>
                                <Link to="/Home">
                                    <button className="teacherAddBtn">Update</button>
                                </Link>
                                </div>
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
      editedCandidateVAR: state.Admin.editedCandidateVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goEditCandidate: (values) => dispatch( editCandidate(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CandidateUpdate);