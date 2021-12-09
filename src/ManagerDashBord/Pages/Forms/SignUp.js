import React from "react";
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { toSignUp } from '../../../Controllers/Auth';

class SignUp extends React.Component {

  render(){   
    return (
  <Formik
    initialValues={{ firstName: '', lastName: '', middleName: '', birthDate: '', gender: '', district: '', village: '',
    currentAddress: '', email: '', phoneNumber: '', password: '', nationality: ''
    }}
    onSubmit={(values, { setSubmitting, resetForm }) => {

      let hold, tok, id;
        let arr = [];
        let idHold = [];

        let prev = this.props.location.search;
        hold = prev;
        arr = hold.split('?tgouljctlogatcwthsbwyachiph=+');
        tok = arr[1];
        idHold = arr[0].split('?is=');
        id = idHold[1];

        let authCarrier = {
            id,
            tok
        };
        let data = {
           values,
           authCarrier
        }
      this.props.goToSignUp(data);
        
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
      gender: Yup.string()
      .required('Gender required'),
      district: Yup.string()
      .required('District of residence required'),
      village: Yup.string()
      .required('Name of your village is required'),
      currentAddress: Yup.string()
      .required('Address is required'),
       email: Yup.string()
       .email()
       .required('Email Required'),
       phoneNumber: Yup.string()
      .required('Phone number is required'),
       password: Yup.string()
       .required('Password required.')
       .min(8, 'Password too short - should contain atleast 8 characters.')
       .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
       nationality: Yup.string()
      .required('Nationality required')
       
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
        

        <label htmlFor="MiddleName">Middle Name</label>
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

         <label htmlFor="Date of Birth">Date of Birth</label>
          <input
            name="birthDate"
            type="text"
            placeholder="Place date of birth"
            value={values.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}            
          />
          {errors.birthDate && touched.birthDate && (
            <div>{errors.birthDate}</div>
          )}
        
      <label htmlFor="gender" style={{ display: 'block' }}>
         Gender
      </label>
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


        <label htmlFor="district">District</label>
          <input
            name="district"
            type="text"
            placeholder="Enter district name"
            value={values.district}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.district && touched.district && (
            <div>{errors.district}</div>
          )}

          <label htmlFor="village">Village</label>
          <input
            name="village"
            type="village"
            placeholder="Enter your village"
            value={values.village}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
          {errors.village && touched.village && (
            <div>{errors.village}</div>
          )}

         <label htmlFor="address">Address</label>
          <input
            name="currentAddress"
            type="text"
            placeholder="Enter your address"
            value={values.currentAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.currentAddress && touched.currentAddress && (
            <div>{errors.currentAddress}</div>
          )}

          <label htmlFor="email">EMAIL</label>
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

          
         <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Enter your phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}            
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <div>{errors.phoneNumber}</div>
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

          <label htmlFor="nationality">Nationality</label>
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
         this.props.history.push("/managerhome");
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
    goToSignUp: (values) => dispatch( toSignUp(values))
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);