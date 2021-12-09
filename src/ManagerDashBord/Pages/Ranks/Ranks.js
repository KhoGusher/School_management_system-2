import React from "react";
import { connect } from 'react-redux';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getRanks, deleteRank } from "../../../Controllers/Admin";
import "./Ranks.css";

class Ranks extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            toRefresh: null
        }

        this.columns = [

            { field: 'rankName', headerName: 'Rank Name', width: 200 },
            { field: 'rankHead', headerName: 'Rank Head', width: 200 },
            { field: 'totalMembers', headerName: 'Total Members', width: 200 },
            { field: 'rankDescription', headerName: 'Rank Description', width: 200 },
            {
                field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                    return (
                        <>
                            <Link
                            to={{
                            pathname: `/details/rank/ ${params.row.rankId}`,
                            state: { rank: params.row }
                            }}
                            >
                            <Details className="teacherDetail" />
                            </Link> 
                            <Link
                            to={{
                                pathname: `/rank/ ${params.row.rankId}`,
                                state: { rank: params.row }
                                }}
                            >
                                <Edit className="teacherEdit" />
                                
                            </Link>

                            <DeleteOutline 
                            className="teacherDelete" 
                            onClick={() => {
                                this.setState({toRefresh: true});
                                this.props.goDeleteRank(params.row.rankId)}
                                
                                } />
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

         this.props.goGetRanks(JSON.stringify(data));
        }
     }
    
    componentDidUpdate(){
        if(this.state.toRefresh){
    
            const temp = localStorage.getItem('data');
            const updated = JSON.parse(temp);
          if(updated){
            let data = {
               schoolid: updated.schoolid
           }
    
            this.props.goGetRanks(JSON.stringify(data));
          // this.setState({toRefresh: false});
          }
        }
     }

     processRanks = () => {
        return (
            <>
    
                <div className="teacherList">
                    <div className="newUser">
                            <button 
                            className="newUserButton"
                            onClick={() => { this.props.history.push("/newrank")  } }
                            >
                                Add Rank
                            </button>
                    
                    </div>
    
                    <div className="topTeachers">
                        <div className="teachersTitle"><h3>Rank Listing</h3></div>
                        <button className="newSubject">Export Ranks</button>
                        <button className="newSubject">Import Ranks</button>
                        <button className="newSubject">Print Preview</button>
                        <div className="btn-search">
    
                            <input className="search-teacher form-control" value="Search Rank" />
                        </div>
                    </div>
    
                    <div style={{ height: 700, width: '100%' }}>
                        <DataGrid className="subjectsTable"
                            getRowId={(r) => r.rankId}
                            rows={this.props.ranks}
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
         { this.props.ranks ? this.processRanks(): <Spinner animation="grow" variant="success" /> }
       </>  
     );
       }
     }
     
const mapStateToProps = state => {
 return {
     ranks: state.Admin.ranks
 }
 }
 
 const mapDispatchToProps = dispatch => {
 return {
     goGetRanks: (schoolId) => dispatch( getRanks(schoolId)),
     goDeleteRank: (id) => dispatch( deleteRank(id))
 };
 };


export default connect(mapStateToProps, mapDispatchToProps)(Ranks);