import React from 'react';
import { connect } from 'react-redux';
import { MdSubject, MdPeople } from 'react-icons/md';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getTeacherHomeDisplays } from '../../../../Controllers/Teacher';
import "./HomeContents.css"

class TeacherHomeContents extends React.Component {

    state = {
        classes: null,
        toRefresh: null
   }

   componentDidMount(){
      
    const temp = localStorage.getItem('data');
    const updated = JSON.parse(temp);
       
    if(updated.identity.startsWith("TMW")){
        this.setState({classes: updated.teacherClass});

       let data = {
           teacherId: updated.teacherid,
           class: updated.teacherClass[0],
           schoolId: updated.schoolid
       }
       this.props.goGetTeacherHomeDisplays(JSON.stringify(data));
     }
     else {
         this.props.homeProps.history.push("/");
      }
    }

    selectClasses = () => {
          return this.state.classes.map( level => {
            return (
                <Link 
                  to={{
                    pathname: `/teacherstudents`,
                    state: { classname: level.classname }
                  }}
                  >
                  { level.classname }
                 </Link>
             );
          }); 
      }

    componentDidUpdate(){
        if(this.state.toRefresh){
          const temp = localStorage.getItem('data');
          const updated = JSON.parse(temp);
             
          if(updated.identity.startsWith("TMW")){
              this.setState({classes: updated.teacherClass});
      
             let data = {
                 teacherId: updated.teacherid,
                 class: updated.teacherClass[0],
                 schoolId: updated.schoolid
             }
             this.props.goGetTeacherHomeDisplays(JSON.stringify(data));
           }
           else {
               this.props.homeProps.history.push("/");
            }
           } 
   }

    renderTeacherHomeDisplays = () => {
        let dispense = this.props.teacherHomeDisplaysVAR;
      return (
    <div className="home">
      <div className="HomeContents">
 
           <div style={{ textDecoration: 'none' }}>
              <div className="homeContentIterm">
                  <MdPeople size="8em" />
                  <span className="homeContentitermTitle">Students</span>
                  <div className="homeContenterContents">
              
                      { this.state.classes ? this.selectClasses(): null }     
                    
                  </div>
              </div>
            </div>

            <Link to="/teachersubjects">
                    <div className="homeContentIterm">

                        <MdSubject size="8em" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:</span>
                        </div>

                    </div>
            </Link>

      </div>
    </div>
         );
      }

      render(){
          
        return (
           <div>
               { this.state.classes ? this.renderTeacherHomeDisplays(): <Spinner animation="grow" variant="primary" /> }
           </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      teacherHomeDisplaysVAR: state.Teacher.teacherHomeDisplaysVAR,
      loading: state.Auth.loading
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
       goGetTeacherHomeDisplays: (values) => dispatch( getTeacherHomeDisplays(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHomeContents);  