import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit, Details } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherAssignments, deleteAssignment } from '../../../../Controllers/Teacher';
import './TeacherAssignments.css';

class TeacherAssignments extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toRefresh: null
        }

        //    defining colums for the subjects
      this.columns = [

        { field: 'subjectname', headerName: 'Subject Name', width: 200 },
        { field: 'subjectcode', headerName: 'Subject Code', width: 230 },
        { field: 'assignmentname', headerName: 'Assignment Name', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link
                                to={{
                                pathname: `/teacher/assignment/ ${params.row.assignmentid}`,
                                state: { assignment: params.row }
                                }}
                                >
                                    <Edit className="teacherEdit" />
                                
                        </Link>
        
                        <DeleteOutline 
                                className="teacherDelete" 
                                onClick={() => {
                                this.setState({toRefresh: true});
                                this.props.goDeleteAssignment(params.row.assignmentid)}
                                
                                }
                        />
                    </>
                )
            }
        },
    ];
    }

    componentDidMount(){
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
        let data = {
            teacherid: updated.teacherid,
            schoolid: updated.schoolid
        }
        
        this.props.goGetTeacherAssignments(JSON.stringify(data));
     }
    
    componentDidUpdate(){
        if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
           let data = {
               teacherid: updated.teacherid,
               schoolid: updated.schoolid
           }

          this.props.goGetTeacherAssignments(JSON.stringify(data));
         // this.setState({toRefresh: false});
        }
     }

    renderTeacherAssignments = () => {
      return (
        <>
            <div className="teacherList">
            
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Assignments  Listing For Chich111</h3></div>
                    <button className="newSubject">Export </button>
                    <button className="newSubject">Import</button>
                    <button className="newSubject">Print Preview</button>
                    <div className="btn-search">

                        <input className="search-teacher form-control" value="Search Assignments" />
                    </div>

                </div>

                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="subjectsTable"
                        getRowId={(r) => r.assignmentid}                   
                        rows={this.props.teacherAssignmentsVAR}
                        disableSelectionOnClick
                        columns={this.columns}
                        pageSize={11}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
        );
      }

      render(){
        return (
           <>
             { this.props.teacherAssignmentsVAR ? this.renderTeacherAssignments(): <Spinner animation="grow" variant="secondary" /> }
           </>  
         );
           }
         }
         
 const mapStateToProps = state => {
     return {
         teacherAssignmentsVAR: state.Teacher.teacherAssignmentsVAR
     }
     }
     
     const mapDispatchToProps = dispatch => {
     return {
         goGetTeacherAssignments: (data) => dispatch( getTeacherAssignments(data)),
         goDeleteAssignment: (id) => dispatch( deleteAssignment(id))
     };
     };
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(TeacherAssignments);