import React from 'react'
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getSubjectsTeacherInfo, getSubjectsStudentInfo } from '../../../Controllers/Admin'; 
import "./Subjects.css";

const TEACHER = [
    { field: 'subjectcode', headerName: 'Subject Code', width: 200 },
    { field: 'subjectname', headerName: 'Subject Name', width: 200 },
    { field: 'count', headerName: 'Total Teachers', width: 200 },
    {
        field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
            return (
                <>
                    <Link to={"/subject/" + params.row.subjectid}>
                        <Details className="teacherDetail" />
                    </Link>
                    <Link to={"/subject/" + params.row.subjectid}>
                        <Edit className="teacherEdit" />
                    </Link>
                    <DeleteOutline className="teacherDelete" onClick={() => this.handleTecherDelete(params.row.id)} />
                </>

            );
        }
    },
];

const STUDENT = [
    { field: 'subjectcode', headerName: 'Subject Code', width: 200 },
    { field: 'subjectname', headerName: 'Subject Name', width: 200 },
    { field: 'count', headerName: 'Total Students', width: 200 },
    {
        field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
            return (
                <>
                    
                    <Link
                       to={{
                        pathname: '/subject/update',
                        state: { student: params.row }
                      }}
                       >
                        <Edit className="teacherEdit" />
                    </Link>
                    <DeleteOutline className="teacherDelete" onClick={() => this.handleTecherDelete(params.row.id)} />
                </>

            );
        }
    },
];
class SubjectTeacher extends React.Component {

    componentDidMount(){

        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        if(updated){
          let data = {
            schoolId: updated.schoolid
          }

         this.props.gotGetSubjectsTeachersInfo(JSON.stringify(data));
         this.props.gotGetSubjectsStudentsInfo(JSON.stringify(data)); 
         }
        }
        
    renderProcessedData =  () => {
        return (
        <>
            <div className="teacherList">

                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Subjects Listing</h3></div>
                    <button className="newSubject">Export Subjects</button>
                    <button className="newSubject">Import Subjects</button>
                    <button className="newSubject">Print Preview</button>
                    <div className="btn-search">

                        <input className="search-teacher form-control" value="Search Subject" />
                    </div>

                </div>

                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="subjectsTable"
                        getRowId={(r) => r.subjectid}
                        rows={this.props.subjectTeacher}
                        disableSelectionOnClick
                        columns={TEACHER}
                        pageSize={11}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
       );
    }
  
    renderSubjectStudent = () => {
        return (
            <div style={{ height: 700, width: '100%' }}>
            <DataGrid className="subjectsTable"
                getRowId={(r) => r.subjectid}
                rows={this.props.subjectStudent}
                disableSelectionOnClick
                columns={STUDENT}
                pageSize={11}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        );
    }
    

    render(){
          return (
              <div>
                { this.props.subjectTeacher ? this.renderProcessedData(): <Spinner animation="grow" variant="success" />}
                <br />
                { this.props.subjectStudent ? this.renderSubjectStudent(): <Spinner animation="grow" variant="success" />}
                
              </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        subjectTeacher: state.Admin.subjectTeacher,
        subjectStudent: state.Admin.subjectStudent,
        loading: state.Auth.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
   return {
    gotGetSubjectsTeachersInfo: (values) => dispatch( getSubjectsTeacherInfo(values)),
    gotGetSubjectsStudentsInfo: (values) => dispatch( getSubjectsStudentInfo(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTeacher);
