import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit, Details } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import{ getTeacherClassessInfo, getStudentsClassesInfo } from '../../../Controllers/Teacher';
import './Classes.css'


class TeacherClasses extends React.Component {
    //    defining colums for the subjects
     
    constructor(props){
        super(props);
        this.TEACHERS_CLASS = [

            { field: 'classname', headerName: 'Class Name', width: 200 },
            { field: 'classdescription', headerName: 'Class Description', width: 200 },
            { field: 'totalclassteachers', headerName: 'Total Teachers', width: 200 },
            {
                field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/Class/" + params.row.id}>
                                <Details className="teacherDetail" />
                            </Link>
                        </>
                    );
                }
            },
        ];

        this.STUDENTS_CLASS = [

            { field: 'classname', headerName: 'Class Name', width: 200 },
            { field: 'totalclassstudents', headerName: 'Total Students', width: 200 },
            {
                field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/Class/" + params.row.id}>
                                <Details className="teacherDetail" />
                            </Link>
                        </>
                    );
                }
            },
        ]; 
    }

    componentDidMount(){
        // 3 is for classid and 2 is for schoolid

        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        let data = {
            studentid: updated.teacherid,
            schoolid: updated.schoolid
        }

        this.props.gotGetTeacherClassessInfo(JSON.stringify(data)); 
        this.props.gotGetStudentsClassesInfo(JSON.stringify(data)); 
        }

    teacherClassData = () => {
      return (
        <div className="teacherList">

            <div className="topTeachers">
                <div className="teachersTitle"><h3>Class Listing</h3></div>
                <button className="newSubject">Export Classes</button>
                <button className="newSubject">Import Classes</button>
                <button className="newSubject">Print Preview</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Class" />
                </div>

            </div>

            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="subjectsTable"
                    getRowId={(r) => r.classid}
                    rows={this.props.teacherClassVAR}
                    disableSelectionOnClick
                    columns={this.TEACHERS_CLASS}
                    pageSize={11}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
       );
   }

   studentClassData = () => {
    return (
      <div className="teacherList">

          <div className="topTeachers">
              <div className="teachersTitle"><h3>Class Listing</h3></div>
              <button className="newSubject">Export Classes</button>
              <button className="newSubject">Import Classes</button>
              <button className="newSubject">Print Preview</button>
              <div className="btn-search">

                  <input className="search-teacher form-control" value="Search Class" />
              </div>

          </div>

          <div style={{ height: 700, width: '100%' }}>
              <DataGrid className="subjectsTable"
                  getRowId={(r) => r.classname}
                  rows={this.props.studentClassVAR}
                  disableSelectionOnClick
                  columns={this.STUDENTS_CLASS}
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
          <div>

              { this.props.teacherClassVAR ? this.teacherClassData(): <Spinner animation="grow" variant="success" />}
              { this.props.studentClassVAR ? this.studentClassData(): <Spinner animation="grow" variant="success" />}
                       
          </div>
       );
      }
    }

    const mapStateToProps = state => {
        return {
            teacherClassVAR: state.Teacher.teacherClassVAR,
            studentClassVAR: state.Teacher.studentClassVAR
        }
      }
      
      const mapDispatchToProps = dispatch => {
       return {
        gotGetTeacherClassessInfo: (data) => dispatch( getTeacherClassessInfo(data)),
        gotGetStudentsClassesInfo: (values) => dispatch( getStudentsClassesInfo(values))
       };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(TeacherClasses);