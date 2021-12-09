import React from 'react'
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getGuardians, deleteGuardian } from '../../../Controllers/Admin';
import '../Teachers/Teachers.css';


class Guardians extends React.Component {
    
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
                { field: 'lastname', headerName: 'Last name', width: 160 },
                { field: 'phonenumber', headerName: 'Phone', width: 130 },
                { field: 'gender', headerName: 'gender', width: 125 },
                { field: 'address', headerName: 'address', width: 130 },
                { field: 'village', headerName: 'village', width: 120 },
                { field: 'district', headerName: 'district', width: 120 },
                { field: 'nationality', headerName: 'Nationality', width: 130 },
                { field: 'identity', headerName: 'Identity', width: 130 },
                
                {
                    field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                        return (
                            <>
                              <Link
                              to={{
                                 pathname: '/guardian/details',
                                 state: { guardian: params.row }
                               }}
                              >
                               <Details className="teacherDetail" />
                              </Link> 
                                <Link
                                 to={{
                                    pathname: '/guardian/update',
                                    state: { guardian: params.row }
                                  }}
                                 >
                                     <Edit className="teacherEdit" />
                                    
                                </Link>
            
                                <DeleteOutline 
                                 className="teacherDelete" 
                                 onClick={() => {
                                    this.setState({toRefresh: true});
                                    this.props.goDeleteGuardian(params.row.guardianid)}
                                    
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

        this.props.goGetGuardians(JSON.stringify(data));
     }
    
    componentDidUpdate(){
        if(this.state.toRefresh){

            const temp = localStorage.getItem('data');
             const updated = JSON.parse(temp);
            let data = {
                schoolId: updated.schoolid
            }

          this.props.goGetGuardians(JSON.stringify(data));
         // this.setState({toRefresh: false});
        }
     } 

    processGuardiansList = () => {      
      return(
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Guardians</h3></div>
                <Link to="/newguardian">
                    <button className="newTeacher">New Guardian</button>
                </Link>
                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Guardians</button>
                <button className="newTeacher">Export Guardians</button>
                <div className="btn-search">
                    <input className="search-teacher form-control" value="Search Student" />
                </div>
            </div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="teachersTable"
                    getRowId={(r) => r.guardianid}
                    rows={this.props.guardians}
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
            { this.props.guardians ? this.processGuardiansList(): <Spinner animation="grow" variant="success" /> }
          </>  
        );
          }
        }
        
const mapStateToProps = state => {
    return {
        guardians: state.Admin.guardians,
        loading: state.Auth.loading
    }
    }
    
    const mapDispatchToProps = dispatch => {
    return {
        goGetGuardians: (schoolId) => dispatch( getGuardians(schoolId)),
        goDeleteGuardian: (id) => dispatch( deleteGuardian(id))
    };
    };


export default connect(mapStateToProps, mapDispatchToProps)(Guardians);