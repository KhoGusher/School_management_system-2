import React from 'react'
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeachers, deleteTeacher } from '../../../Controllers/Admin';

import "./Teachers.css"


class Teachers extends React.Component {

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
        { field: 'address', headerName: 'address', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phonenumber', headerName: 'Phone', width: 130 },
        { field: 'identity', headerName: 'Identity', width: 130 },
        { field: 'nationality', headerName: 'Nationality', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link 
                        to={{
                            pathname: '/view/details/',
                            state: { teacher: params.row }
                          }}
                           >
                            <Details className="teacherDetail" />
                        </Link>
                        <Link 
                        to={{
                            pathname: '/teacher/update',
                            state: { teacher: params.row }
                          }}
                           >
                             <Edit className="teacherEdit" />   
                             
                        </Link>
                        <DeleteOutline 
                          className="teacherDelete" 
                          onClick={() => {
                            this.setState({toRefresh: true});  
                            this.props.goDeleteTeacher(params.row.teacherid)}
                           } />
                    </>
                )
            }
        }
    ];
  }
    
    componentDidMount(){

        const temp = localStorage.getItem('data');
          const updated = JSON.parse(temp);
          let data = {
            schoolId: updated.schoolid
        }

        this.props.goGetTeachers(JSON.stringify(data));
    }

    componentDidUpdate(){
        if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
            let data = {
                schoolId: updated.schoolid
            }

            this.props.goGetTeachers(JSON.stringify(data));
       }
    }

    processTeachersList = () => {      
            return( 
                <div className="teacherList">
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Teachers</h3></div>
                    <Link to="/newteacher">
                        <button className="newTeacher">New Teacher</button>
                    </Link>
    
                    <button className="newTeacher">Print Preview</button>
                    <div className="btn-search">
    
                        <input className="search-teacher form-control" value="Search Teacher" />
                    </div>
                </div>
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="teachersTable"
                        getRowId={(r) => r.teacherid}
                        rows={this.props.teachers}
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
           { this.props.teachers ? this.processTeachersList(): <Spinner animation="grow" variant="success" /> }
       </>  
      );
    }
}

const mapStateToProps = state => {
    return {
        teachers: state.Admin.teachers
    }
  }
 
  const mapDispatchToProps = dispatch => {
   return {
    goGetTeachers: (schoolId) => dispatch( getTeachers(schoolId)),
    goDeleteTeacher: (id) => dispatch( deleteTeacher(id))
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);

