import React from 'react';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getPasswordRenewed } from '../../../Controllers/Auth';


class PasswordRenew extends React.Component {

    render(){   
        return (
      <Formik
        initialValues={{ userName: '', password: ''   }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
        
            const temp1 = localStorage.getItem('data');
            if(!temp1){
                this.props.history.push("/signin");
            }

            if(temp1){
                let data = {
                    temp1,
                    values
                }
                this.props.goGetPasswordRenewed(data, this.props);
            }
             
            
          setSubmitting(false);
            // resetForm();
          
        }}
      
    
        validationSchema={Yup.object().shape({
            userName: Yup.string()
            .required('username or email required'),
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
            <label htmlFor="Email">Username or email</label>
              <input
                name="userName"
                type="text"
                placeholder=" Enter your userName "
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
              {errors.userName && touched.userName && (
                <div>{errors.userName}</div>
              )}
    
              <label htmlFor="password">New password</label>
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
      goGetPasswordRenewed: (data, dest) => dispatch( getPasswordRenewed(data, dest))
   };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PasswordRenew);
  