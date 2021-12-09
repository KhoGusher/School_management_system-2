import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getStudentSubjectsInfo } from '../../../Controllers/Student';

class StudentSubjects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toRefresh: null
        }
        this.columns = [ 
            {
                field: 'subjectname', headerName: 'Subject name', width: 400, renderCell: (params) => {
                    return (
                        <div className="teacherListFirst">
                            <img className="teachersPic" scr={params.row.avator} alt="img" />
                            {params.row.subjectname}
                        </div>
                    )
                }
            },
            { field: 'subjectcode', headerName: 'Subject code', width: 160 }
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
        this.props.gotGetStudentSubjectsInfo(JSON.stringify(data));
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

            this.props.gotGetStudentSubjectsInfo(JSON.stringify(data));
        } 
      }
    }
    
    processStudentSubjects = () => {      
      return(
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Student</h3></div>
                
            </div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="teachersTable"
                    getRowId={(r) => r.subjectid}
                    rows={this.props.studentSubjectsVAR}
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
            { this.props.studentSubjectsVAR ? this.processStudentSubjects(): <Spinner animation="grow" variant="success" /> }
          </>  
        );
          }
        }

const mapStateToProps = state => {
    return {
          studentSubjectsVAR: state.Student.studentSubjectsVAR
    }
  }
  
  const mapDispatchToProps = dispatch => {
   return {
    gotGetStudentSubjectsInfo: (values) => dispatch( getStudentSubjectsInfo(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(StudentSubjects);
