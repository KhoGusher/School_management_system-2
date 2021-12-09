import React from 'react';
import { connect } from 'react-redux';
import './StudentsList.css';
import { DataGrid } from '@material-ui/data-grid';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getStudentClassGradesInfo } from '../../../../Controllers/Teacher';

class StudentGrades extends React.Component {
    
    constructor(props){
        super(props);

        this.columns = [
            {
                field: 'firstname', headerName: 'First name', width: 160, renderCell: (params) => {
                    return (
                        <div className="teacherListFirst">
                            <img className="teachersPic" scr={params.row.avator} alt="img" />
                            {params.row.firstName}
                        </div>
                    )
                }
            },
            { field: 'lastname', headerName: 'Last name', width: 160 },
            { field: 'gender', headerName: 'Gender', width: 125 },
            { field: 'district', headerName: 'District', width: 220 },
            { field: 'address', headerName: 'Address', width: 130 },
            { field: 'grade', headerName: 'Grade', width: 170 },
            {field: 'position', headerName: 'Position', width: 150}
        ];
    }

    componentDidMount(){
        // 3 is for classid and 2 is for schoolid
        let data = {
            class: 'Form 4',
            schoolId: 2
        }
        
         this.props.gotGetStudentClassGradesInfo(JSON.stringify(data)); 
        }

    renderStudentGrades = () => {
        return (
            <div className="teacherList">
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Student Perfomances for chich11-assignment1</h3></div>
    
                    <div className="btn-search">
    
                        <input className="search-teacher form-control" value="Search Student" />
                    </div>
    
                </div>
    
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="teachersTable"
                        getRowId={(r) => r.assignmentid}
                        rows={this.props.studentClassGradesVAR}
                        disableSelectionOnClick
                        columns={this.columns}
                        pageSize={11}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                { this.props.studentClassGradesVAR ? this.renderStudentGrades(): <Spinner animation="grow" variant="success" />}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    console.log(state.Teacher.studentClassGradesVAR);
    return {
        studentClassGradesVAR: state.Teacher.studentClassGradesVAR
    }
  }
  
  const mapDispatchToProps = dispatch => {
   return {
      gotGetStudentClassGradesInfo: (data) => dispatch( getStudentClassGradesInfo(data))
   };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentGrades);