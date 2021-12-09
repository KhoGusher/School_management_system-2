import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { addGuardian } from '../../../../Controllers/Admin';
import "./NewGuardian.css"

class NewGuardian extends React.Component {
      
    render(){
         return (
              <Formik
                  initialValues={{ firstName: '', lastName: '', phoneNumber: '', gender: '', address: '', 
                              village: '', district: '', nationality: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    this.props.goAddGuardian(values);
                              
                    setSubmitting(false);
                     // resetForm();
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                      .required('FirstName Required'),
                    lastName: Yup.string()
                     .required('LastName required'),
                    phoneNumber: Yup.string()
                     .required('Middle name required'),
                    gender: Yup.string()
                    .required('Date of birth required'),
                    address: Yup.string()
                    .required(' Required'),
                    village: Yup.string()
                    .required('Class required'),
                    district: Yup.string()
                    .required(' required'),
                    nationality: Yup.string()
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
                                        <label>Phone Number</label>
                                        <input
                                                name="phoneNumber"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.phoneNumber && touched.phoneNumber && (
                                                <div>{errors.phoneNumber}</div>
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
                                        <label>District</label>
                                        <input
                                                name="district"
                                                type="text"
                                                placeholder="Enter your date of birth"
                                                value={values.district}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.district && touched.district && (
                                                <div>{errors.district}</div>
                                            )}
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

                                        if(this.props.addedGuardianVAR){
                                            console.log("hello");
                                           // this.props.history.push("/guardians")
                                        }
                            return (
                                <div className="teacher">
                                <div className="teacherTitleContainer">
                                <h3 className="teacherTitle">Adding Guardian</h3>
                                <Link to="/Home">
                                    <button className="teacherAddBtn">Update</button>
                                </Link>
                                </div>
                                {form}
                                { this.props.addedGuardianVAR ? 
                                <div>
                                <p>Identity: {this.props.addedGuardianVAR.updatedSignature[0].identity}</p>
                                <p>Password: {this.props.addedGuardianVAR.password}</p>
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
      addedGuardianVAR: state.Admin.addedGuardianVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goAddGuardian: (values) => dispatch( addGuardian(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewGuardian);