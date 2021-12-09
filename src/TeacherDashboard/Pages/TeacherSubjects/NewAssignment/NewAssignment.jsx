import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import "./NewAssignment.css"

// while signig teacher in, make sure the query to retrieve all his subjects 
//is run so that when creating assignment that gets used

import { teacherAddsNewAssignment } from '../../../../Controllers/Teacher';

class TeacherNewAssignment extends React.Component {    

render(){
  return (
        <Formik
            initialValues={{ subjectid: '', assignmentname: '', schoolid: '', teacherid: ''
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
    
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);

            let data = {
                teacherid: updated.teacherid,
                schoolid: updated.schoolid,
                values: values
            }

            this.props.goTeacherAddNewAssignment(data);
                        
            setSubmitting(false);
            // resetForm();
            }}
            validationSchema={Yup.object().shape({
            subjectid: Yup.string()
            .required('required'),
            assignmentname: Yup.string()
            .required(' Required') 
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
           <div className="subjectid">
            <label>Subject name</label>
             <select
                name="subjectid"
                value={values.subjectid}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: 'block' }}
            >
                <option value="" label="Subject" />
                <option value="Chich" label="Chich" />
                <option value="Eng" label="Eng" />
            </select>
            {errors.subjectid &&
                touched.subjectid &&
                <div className="input-feedback">
                {errors.subjectid}
                </div>}
        </div>
    </div>
    <div className="userUpdateItem">
        <label>Assignment name</label>
        <input
                name="assignmentname"
                type="text"
                placeholder="like English language test 1"
                value={values.assignmentname}
                onChange={handleChange}
                onBlur={handleBlur}    
            />
            {errors.assignmentname && touched.assignmentname && (
                <div>{errors.assignmentname}</div>
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

        if(this.props.teacherAddedAssignmentVAR){                                        
            this.props.history.push("/list/teacher/assignments")
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

                </div>
            );
            }}
            </Formik>
        );
        }
    }

         
const mapStateToProps = state => {
    return {
      teacherAddedAssignmentVAR: state.Teacher.teacherAddedAssignmentVAR,
      loading: state.Auth.loading
       }
     } 

  const mapDispatchToProps = dispatch => {
   return {
    goTeacherAddNewAssignment: (values) => dispatch( teacherAddsNewAssignment(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherNewAssignment);