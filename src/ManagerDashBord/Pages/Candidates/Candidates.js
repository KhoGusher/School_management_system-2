import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getCandidates, deleteCandidate } from '../../../Controllers/Admin';
import "./Candidates.css";

class Candidates extends React.Component {
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
            { field: 'birthdate', headerName: 'D.O.B', width: 115 },
            { field: 'gender', headerName: 'Gender', width: 125 },
            { field: 'district', headerName: 'District', width: 120 },
            { field: 'address', headerName: 'Address', width: 130 },
            {
                field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                    return (
                        <>
                           <Link
                             to={{
                                pathname: `/candidatedetails/ ${params.row.studentid}`,
                                state: { student: params.row }
                              }}
                             >
                                <Details className="teacherDetail" />
                            </Link>
                            <Link
                             to={{
                                pathname: `/candidate/ ${params.row.studentid}`,
                                state: { student: params.row }
                              }}
                             >
                               <Edit className="teacherEdit" />    
                            </Link>

                            <DeleteOutline 
                            className="teacherDelete"
                             onClick={() => {
                                 this.setState({toRefresh: true});
                                 this.props.goDeleteCandidate(params.row.studentid)} 
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
      if(updated){
        let data = {
            schoolId: updated.schoolid
        }
     
        this.props.goGetCandidates(JSON.stringify(data));
       }
     }

     componentDidUpdate(){
       if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
        if(updated){
           let data = {
               schoolId: updated.schoolid
           }
     
            this.props.goGetCandidates(JSON.stringify(data));
        } 
      }
    }

    processStudentsList = () => {      
        return (
            <div className="teacherList">
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Students</h3></div>
                    <button className="newTeacher">Connect MANEB</button>
                    <Link to="/newcandidate">
                        <button className="newTeacher">New Candidate</button>
    
                    </Link>
    
                    <button className="newTeacher">Print Preview</button>
                    <button className="newTeacher">Import Candidate</button>
                    <button className="newTeacher">Export Candidate</button>
                    <div className="btn-search">
    
                        <input className="search-teacher form-control" value="Search Candidate" />
                    </div>
    
                </div>
    
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="teachersTable"
                        getRowId={(r) => r.studentid}
                        rows={this.props.candidates}
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
          <>
            { this.props.candidates ? this.processStudentsList(): <Spinner animation="grow" variant="success" /> }
          </>  
        );
          }
        }
        
const mapStateToProps = state => {
    return {
        candidates: state.Admin.candidates,
        loading: state.Auth.loading
    }
    }
    
    const mapDispatchToProps = dispatch => {
    return {
        goGetCandidates: (schoolId) => dispatch( getCandidates(schoolId)),
        goDeleteCandidate: (id) => dispatch( deleteCandidate(id))
    };
    };


export default connect(mapStateToProps, mapDispatchToProps)(Candidates);


