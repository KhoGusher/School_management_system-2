import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import {getStudentGradesForStudentInfo} from '../../../Controllers/Student';
import "./StudentResults.css"


class StudentComponentForGrades extends React.Component {

// subjectname, subjectcode, assignmentname, grade
    constructor(props){
        super(props);
        this.state = {
            toRefresh: null
        }
        this.columns = [ 
            {
                field: 'subjectname', headerName: 'Subject name', width: 250, renderCell: (params) => {
                    return (
                        <div className="teacherListFirst">
                            <img className="teachersPic" scr={params.row.avator} alt="img" />
                            {params.row.subjectname}
                        </div>
                    )
                }
            },
            { field: 'subjectcode', headerName: 'Subject code', width: 160 },
            { field: 'assignmentname', headerName: 'Assignment name', width: 160 },
            { field: 'grade', headerName: 'Grade', width: 160 }
        ];
    }

    componentDidMount(){
        // SELECT * FROM student WHERE class='Form 1' AND studentid='8';
        // after student signs in, any request to come should have studentid, schoolid and class
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        if(updated){
          let data = {
            studentid: updated.studentid,
            schoolid: updated.schoolid
            }
        this.props.gotGetStudentGradesForStudentInfo(JSON.stringify(data));
          }
        }


    componentDidUpdate(){
         if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
          if(updated){
            let data = {
               studentid: updated.studentid,
               schoolid: updated.schoolid
             }

            this.props.gotGetStudentGradesForStudentInfo(JSON.stringify(data));
          }  
       }
    }


    renderStudentGrades = () => {
        return(
            <div className="teacherList">
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Student</h3></div>
                    
                </div>
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="teachersTable"
                        getRowId={(r) => r.subjectid}
                        rows={this.props.studentGradesForStudentVAR}
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
          <div>
             { this.props.studentGradesForStudentVAR ? this.renderStudentGrades(): <Spinner animation="grow" variant="success" /> }
          </div>
      );
  }
}

const mapStateToProps = state => {
    console.log(state.Student.studentGradesForStudentVAR);
     return {
           studentGradesForStudentVAR: state.Student.studentGradesForStudentVAR
     }
   }
   
   const mapDispatchToProps = dispatch => {
    return {
     gotGetStudentGradesForStudentInfo: (values) => dispatch( getStudentGradesForStudentInfo(values))
    };
   };
 
 export default connect(mapStateToProps, mapDispatchToProps)(StudentComponentForGrades);
 
