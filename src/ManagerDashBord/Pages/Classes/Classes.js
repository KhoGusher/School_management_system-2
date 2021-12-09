import React from 'react'
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherClassInfo, getStudentClassInfo } from '../../../Controllers/Admin';
import './Classes.css';

const TEACHERS = [

    { field: 'classname', headerName: 'Class Name', width: 200 },
    { field: 'classdescription', headerName: 'Class Description', width: 200 },
    { field: 'total_teachers', headerName: 'Total Teachers', width: 200 },
    {
        field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
            return (
                <>
                    <Link to={"/Class/" + params.row.id}>
                        <Details className="teacherDetail" />
                    </Link>
                    <Link to={"/Class/" + params.row.id}>
                        <Edit className="teacherEdit" />
                    </Link>
                    <DeleteOutline className="teacherDelete"  />
                </>
            )
        }
    },
];

const STUDENTS = [

    { field: 'classname', headerName: 'Class Name', width: 200 },
    { field: 'classdescription', headerName: 'Class Description', width: 200 },
    { field: 'total_students', headerName: 'Total Students', width: 200 },
    {
        field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
            return (
                <>
                    <Link to={"/Class/" + params.row.id}>
                        <Details className="teacherDetail" />
                    </Link>
                    <Link to={"/Class/" + params.row.id}>
                        <Edit className="teacherEdit" />
                    </Link>
                    <DeleteOutline className="teacherDelete" />
                </>

            )
        }
    },
];

class Classes extends React.Component {
    //delete class function
   
    componentDidMount(){

        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        if(updated){
        let data = {
            schoolId: updated.schoolid
         }

        this.props.gotGetSubjectTeacherClassInfo(JSON.stringify(data));
        this.props.gotGetSubjectStudentClassInfo(JSON.stringify(data));
      }
    }
   
    renderClassTeacher = () => {
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
                    rows={this.props.classTeacher}
                    disableSelectionOnClick
                    columns={TEACHERS}
                    pageSize={11}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            </div>
        );
    }
   
    renderClassStudent = () => {
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
                    rows={this.props.classStudent}
                    disableSelectionOnClick
                    columns={STUDENTS}
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

              { this.props.classTeacher ? this.renderClassTeacher(): <Spinner animation="grow" variant="success" />  }
              { this.props.classStudent ? this.renderClassStudent(): <Spinner animation="grow" variant="success" />  }

        </div>
    );
   }
 }

 const mapStateToProps = state => {
    return {
        classTeacher: state.Admin.classTeacher,
        classStudent: state.Admin.classStudent
    }
  }
  
  const mapDispatchToProps = dispatch => {
   return {
    gotGetSubjectTeacherClassInfo: (values) => dispatch( getTeacherClassInfo(values)),
    gotGetSubjectStudentClassInfo: (values) => dispatch( getStudentClassInfo(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Classes);