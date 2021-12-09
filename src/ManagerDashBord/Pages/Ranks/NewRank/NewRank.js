import React from 'react'
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { addRank } from '../../../../Controllers/Admin';
import "./NewStudent.css"

class NewRank extends React.Component {

    render(){
         return (
              <Formik
                  initialValues={{ rankName: '', rankHead: '', totalMembers: '', rankDescription: ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
          
                    this.props.goAddRank(values);
                              
                    setSubmitting(false);
                     // resetForm();
                  }}
                  validationSchema={Yup.object().shape({
                    rankName: Yup.string()
                      .required('required'),
                    rankHead: Yup.string()
                     .required('required'),
                    totalMembers: Yup.string()
                     .required('required'),
                    rankDescription: Yup.string()
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
                            <span className="userUpdateTitle">New rank</span>
                            <form className="userUpdateForm" onSubmit={handleSubmit}>
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label className="teacherlabes">RankName</label>
    
                                        <input
                                            name="rankName"
                                            type="text"
                                            placeholder="Enter name of rank"
                                            value={values.rankName}
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                          />
                                           {errors.rankName && touched.rankName && (
                                            <div>{errors.rankName}</div>
                                         )}
    
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Head of this rank</label>
                                        <input
                                                name="rankHead"
                                                type="text"
                                                placeholder="Enter the head of the rank to be created"
                                                value={values.rankHead}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.rankHead && touched.rankHead && (
                                                <div>{errors.rankHead}</div>
                                            )}
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Total members </label>
                                        <input
                                                name="totalMembers"
                                                type="text"
                                                placeholder="Total members in this rank"
                                                value={values.totalMembers}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.totalMembers && touched.totalMembers && (
                                                <div>{errors.totalMembers}</div>
                                            )}
                                    </div>
                                    
                                    <div className="userUpdateItem">
                                        <label>Description of this rank</label>
                                        <input
                                                name="rankDescription"
                                                type="text"
                                                placeholder="Add a description about this rank"
                                                value={values.rankDescription}
                                                onChange={handleChange}
                                                onBlur={handleBlur}    
                                            />
                                            {errors.rankDescription && touched.rankDescription && (
                                                <div>{errors.rankDescription}</div>
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

                                        if(this.props.addedRankVAR){
                                            this.props.history.push("/ranks")
                                        }
                            return (
                                <div className="teacher">
                                <div className="teacherTitleContainer">
                                <h3 className="teacherTitle">Adding Rank</h3>
                                <Link to="/ranks">
                                    <button onClick={()=> { this.props.history.push("/ranks") }} className="teacherAddBtn">Update</button>
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
      addedRankVAR: state.Admin.addedRankVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
      goAddRank: (values) => dispatch( addRank(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewRank);