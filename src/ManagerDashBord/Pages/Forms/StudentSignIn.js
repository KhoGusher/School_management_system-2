import React from "react";
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { StudentToSignIn } from '../../../Controllers/Auth';

class StudentSignIn extends React.Component {

  render(){   
    return (
  <Formik
    initialValues={{ userName: '', password: ''   }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
    
      this.props.goToSignIn(values);
        
      setSubmitting(false);
        // resetForm();
      
    }}
  

    validationSchema={Yup.object().shape({
      userName: Yup.string()
        .required('Field is required'),
       password: Yup.string()
       .required('Password required.')
       .min(8, 'Password too short - should contain atleast 8 characters.')
       .matches(/(?=.*[0-9])/, 'Password must contain a number.')      
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
        <form style={{marginTop: '130px'}} onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
          <input
            name="userName"
            type="text"
            placeholder="  username"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
          {errors.userName && touched.userName && (
            <div>{errors.userName}</div>
          )}

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder=" Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}            
          />
          {errors.password && touched.password && (
            <div>{errors.password}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
              SIGN UP 
          </button>

        </form>
        </div>
      );

      if(this.props.loading){
        form =  <Spinner animation="grow" variant="success" />
      }

      if(this.props.data){
         this.props.history.push("/studenthome")
      }
      
      let errorMessage = null;
      if(this.props.authError){
        errorMessage = (
          <p>{this.props.authError}</p>
        );
      }

      return (  
        <div>
          {form}
          {errorMessage} 
        </div>        
      );
    }}
  </Formik>
);
  }
}

const mapStateToProps = state => {
  return {
    data: state.Auth.data,
    loading: state.Auth.loading,
    authError: state.Auth.authError
  }
}

const mapDispatchToProps = dispatch => {
 return {
    goToSignIn: (values) => dispatch( StudentToSignIn(values))
 };
};


export default connect(mapStateToProps, mapDispatchToProps)(StudentSignIn);

