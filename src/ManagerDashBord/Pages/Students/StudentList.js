import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getStudents, deleteStudent } from '../../../Controllers/Admin';
import "./StudentsList.css"

class StudentList extends React.Component {
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
                                pathname: '/studentdetails',
                                state: { student: params.row }
                              }}
                             >
                                <Details className="teacherDetail" />
                            </Link>
                            <Link
                             to={{
                                pathname: `/student/update`,
                                state: { student: params.row }
                              }}
                             >
                               <Edit className="teacherEdit" />    
                            </Link>

                            <DeleteOutline 
                            className="teacherDelete"
                             onClick={() => {
                                 this.setState({toRefresh: true});
                                 this.props.goDeleteStudent(params.row.studentid)} 
                             }
                             />
                        </>
                    )
                }
            }
        ];
    }

    componentDidMount(){
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        if(updated){
         let data = {
            schoolId: updated.schoolid
         }

        this.props.goGetStudents(JSON.stringify(data));
       }
    }

     componentDidUpdate(){
         if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
          if(updated){
            let data = {
                schoolId: updated.schoolid
            }

          this.props.goGetStudents(JSON.stringify(data));
          } 
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
                    rows={this.props.students}
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
            { this.props.students ? this.processStudentsList(): <Spinner animation="grow" variant="success" /> }
          </>  
        );
          }
        }
        
const mapStateToProps = state => {
    return {
        students: state.Admin.students
    }
    }
    
    const mapDispatchToProps = dispatch => {
    return {
        goGetStudents: (data) => dispatch( getStudents(data)),
        goDeleteStudent: (id) => dispatch( deleteStudent(id))
    };
    };


export default connect(mapStateToProps, mapDispatchToProps)(StudentList);