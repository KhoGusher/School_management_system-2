import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import {  Details } from "@material-ui/icons"
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherStudentsForTeacher } from '../../../Controllers/Teacher'; 
import './StudentsList.css';

class TeacherStudentList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toRefresh: null
        }
        this.columns = [ 
            {
                field: 'firstname', headerName: 'First name', width: 160, renderCell: (params) => {
                    return (
                        <div className="teacherListFirst">
                            <img className="teachersPic" scr={params.row.avator} alt="img" />
                            {params.row.firstname}
                        </div>
                    )
                }
            },
            { field: 'middlename', headerName: 'Middle name', width: 160 },
            { field: 'lastname', headerName: 'Last name', width: 160 },
            { field: 'birthdate', headerName: 'D.O.B', width: 115 },
            { field: 'gender', headerName: 'gender', width: 125 },
            { field: 'district', headerName: 'district', width: 120 },
            { field: 'class', headerName: 'class', width: 120 },
            { field: 'address', headerName: 'address', width: 130 },
            { field: 'phonenumber', headerName: 'Phone', width: 130 },
            { field: 'identity', headerName: 'Identity', width: 130 },
            { field: 'nationality', headerName: 'Nationality', width: 130 },
            {
                field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                    return (
                        <>
                           <Link
                             to={{
                                pathname: `/studentdetails/ ${params.row.studentid}`,
                                state: { student: params.row }
                              }}
                             >
                                <Details className="teacherDetail" />
                            </Link>
                        </>
                    )
                }
            }
        ];
    }

    componentDidMount(){
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        let data = {
            teacherId: updated.teacherid, 
            classname: this.props.location.state.classname,
            schoolId: updated.schoolid
        }

        this.props.goGetTeacherStudentsForTeacher(data);
     }

     componentDidUpdate(){
         if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
            let data = {
                schoolId: updated.schoolid
            }

          this.props.goGetTeacherStudentsForTeacher(JSON.stringify(data));
      } 
    }

    processStudentsList = () => {      
      return(
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Students</h3></div>
                <Link to="/newstudent">
                    <button className="newTeacher">New Student</button>
                </Link>
                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Students</button>
                <button className="newTeacher">Export Students</button>
                <div className="btn-search">
                    <input className="search-teacher form-control" value="Search Student" />
                </div>
            </div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="teachersTable"
                    getRowId={(r) => r.studentid}
                    rows={this.props.teacherStudentsClassVAR}
                    disableSelectionOnClick
                    columns={this.columns}
                    pageSize={11}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
              </div>
           </div>
              );
           }

    render(){
       return (
          <>
            { this.props.teacherStudentsClassVAR ? this.processStudentsList():  <Spinner animation="grow" variant="dark" /> }
          </>  
        );
          }
        }
        
const mapStateToProps = state => {
    return {
        teacherStudentsClassVAR: state.Teacher.teacherStudentsClassVAR
    }
    }
    
    const mapDispatchToProps = dispatch => {
    return {
        goGetTeacherStudentsForTeacher: (schoolId) => dispatch( getTeacherStudentsForTeacher(schoolId))
    };
    };


export default connect(mapStateToProps, mapDispatchToProps)(TeacherStudentList);

