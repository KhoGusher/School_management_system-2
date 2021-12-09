import React from 'react'
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { editTeacherAssignment } from '../../../../Controllers/Teacher';


class TeacherAssignmentUpdate extends React.Component {

    render(){
        // teacher details we need to update
             const asignId = this.props.location.state == undefined ? null: this.props.location.state.assignment;
            
             return (
                <Formik
                  initialValues={{ subjectCode: asignId ? `${asignId.subjectcode}`: '',
                                   assignmentName: asignId ? `${asignId.assignmentname}`: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    const data = {
                        values,
                        subjectId: asignId.subjectid,
                        asignId: asignId.assignmentid
                    }
                    this.props.goEditTeacherAssignment(data);
                              
                    setSubmitting(false);
                      resetForm();
                  }}
                  validationSchema={Yup.object().shape({
                    subjectCode: Yup.string()
                      .required('required'),
                    assignmentName: Yup.string()
                     .required('required')
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
                                            <div className="subjectCode">
                                                <label>Subject code</label>
                                                <select
                                                    name="subjectCode"
                                                    value={values.subjectCode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ display: 'block' }}
                                                >
                                                    <option value={values.subjectCode} label={values.subjectCode} />
                                                    <option value="ALG-ST" label="ALG-ST" />
                                                    <option value="COMP-APP" label="COMP-APP" />
                                                    <option value="SOFT-ENG" label="SOFT-ENG" />
                                                    <option value="EMB-SYS" label="EMB-SYS" />
                                                    
                                                </select>
                                                {errors.subjectCode &&
                                                    touched.subjectCode &&
                                                    <div className="input-feedback">
                                                    {errors.subjectCode}
                                                    </div>}
                                            </div>
                                        </div>
                                        
                                        <div className="userUpdateItem">
                                            <label>Asignment name</label>
                                            <input
                                                    name="assignmentName"
                                                    type="text"
                                                    placeholder="Name of assignment"
                                                    value={values.assignmentName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}    
                                                />
                                                {errors.assignmentName && touched.assignmentName && (
                                                    <div>{errors.assignmentName}</div>
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
                  if(this.props.editedAssignmentVAR){
                      this.props.history.push("/list/teacher/assignments");
                  }
                  return (
                    <div className="teacher">
                      <div className="teacherTitleContainer">
                      <h3 className="teacherTitle">Teacher Details</h3>
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
      editedAssignmentVAR: state.Teacher.editedAssignmentVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goEditTeacherAssignment: (values) => dispatch( editTeacherAssignment(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAssignmentUpdate);