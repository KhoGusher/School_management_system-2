import React from "react";
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { AdminToSignIn } from '../../../Controllers/Auth';


class AdminSignIn extends React.Component {

  render(){   
    return (
  <Formik
    initialValues={{ email: '', password: ''   }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
    
      this.props.goToSignIn(values);
        
      setSubmitting(false);
        // resetForm();
      
    }}
  

    validationSchema={Yup.object().shape({
        email: Yup.string()
        .email()
        .required('Email Required'),
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
        <label htmlFor="Email">Email</label>
          <input
            name="email"
            type="text"
            placeholder=" Enter your email "
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
          {errors.email && touched.email && (
            <div>{errors.email}</div>
          )}

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
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
        form = <Spinner animation="grow" variant="success" />
      }

      if(this.props.data){
         this.props.history.push("/managerhome")
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
    goToSignIn: (values) => dispatch( AdminToSignIn(values))
 };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);

