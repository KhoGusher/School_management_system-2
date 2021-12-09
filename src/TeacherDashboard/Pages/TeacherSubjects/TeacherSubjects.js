import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherSubjects } from '../../../Controllers/Teacher';
import "./Subjects.css";

class TeacherSubjects extends React.Component {    

    constructor(props){
        super(props);

          //    defining colums for the subjects
        this.state = {
            toRefresh: null
        }

        this.columns = [
        
        { field: 'subjectname', headerName: 'Subject Name', width: 200 },
        { field: 'subjectcode', headerName: 'Subject Code', width: 200 },
        {
        },
    ];
    }

    componentDidMount(){
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
       if(updated){
        let data = {
           teacherid: updated.teacherid,
           schoolid: updated.schoolid
         }
        this.props.goGetTeacherSubjects(JSON.stringify(data));
       }
    }
    
    renderTeacherSubjects = () => {
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
                        rows={this.props.teacherSubjectsVAR}
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
           <div>
              { this.props.teacherSubjectsVAR ? this.renderTeacherSubjects(): <Spinner animation="grow" variant="light" /> }
           </div>
        );
    }
}

const mapStateToProps = state => {
     
    return {
      loading: state.Auth.loading,
      teacherSubjectsVAR: state.Teacher.teacherSubjectsVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
    goGetTeacherSubjects: (values) => dispatch( getTeacherSubjects(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSubjects);