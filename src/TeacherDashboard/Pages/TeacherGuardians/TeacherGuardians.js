import React from 'react';
import { connect } from 'react-redux';
import './Guardians.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit, Details } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherGuardianInfo } from '../../../Controllers/Teacher';

class TeacherGuardian extends React.Component {
  
      constructor(props){
          super(props);

        this.columns = [
        // { field: 'id', headerName: 'ID', width: 70 },

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
        { field: 'birthdate', headerName: 'D.O.B', width: 115 },
        { field: 'gender', headerName: 'Gender', width: 125 },
        { field: 'district', headerName: 'District', width: 120 },
        { field: 'address', headerName: 'Address', width: 130 },
        { field: 'phonenumber', headerName: 'Phone', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Guardian/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Guardian/" + params.row.id}>
                            <Details className="teacherEdit" />
                        </Link>

                    </>

                )
            }
         },
      ];
    }

    componentDidMount(){
        // 3 is for classid and 2 is for schoolid
        let data = {
            classId: 3,
            schoolId: 2
        }
          this.props.gotGetTeacherGuardianInfo(JSON.stringify(data)); 
  
       }

    renderTeacherGuardianData = () => {
      return (
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Teacher Guardians</h3></div>
                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Guardians</button>
                <button className="newTeacher">Export Guardians</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Guardian" />
                </div>

            </div>

            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="teachersTable"
                    getRowId={(r) => r.studentid}
                    rows={this.props.teacherGuardianVAR}
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
                 { this.props.teacherGuardianVAR ? this.renderTeacherGuardianData(): <Spinner animation="grow" variant="success" /> }
             </div>
          );
      }
}

const mapStateToProps = state => {
    return {
        teacherGuardianVAR: state.Teacher.teacherGuardianVAR
      }
  }
  
  const mapDispatchToProps = dispatch => {
   return {
      gotGetTeacherGuardianInfo: (data) => dispatch( getTeacherGuardianInfo(data)),
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherGuardian);