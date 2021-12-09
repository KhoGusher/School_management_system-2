import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getStudentBio } from '../../Controllers/Student';

class StudentBio extends React.Component {

    state = {
        toRefresh: null
    };

    componentDidMount(){
    
        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
      if(updated){       
        let data = {
            studentId: updated.studentid,
            schoolId: updated.schoolid
        }
        
        this.props.goGetStudentBio(JSON.stringify(data));
        }
    }

    componentDidUpdate(){
         if(this.state.toRefresh){
            const temp = localStorage.getItem('data');
             const updated = JSON.parse(temp);
          if(updated){       
            let data = {
                studentId: updated.studentid,
                schoolId: updated.schoolid
              }

            this.props.goGetStudentBio(JSON.stringify(data));
          }  
       }
    }

    renderStudentBio = () => {
        return this.props.studentBioVAR.map( item => {
            return (
                <div>
                   <h1>{item.firstname} {item.middlename} {item.lastname} </h1>
                   <p>{item.gender}</p>
                   <p>{item.birthdate}</p>
                   <p>{item.class}</p>
                   <p>{item.regnumber}</p>
                   <p>{item.guardiannumber}</p>
                   <p>{item.address}</p>
                   <p>{item.village}</p>
                   <p>{item.district}</p>
                   <p>{item.nationality}</p>
                </div>
            );
        });
    }

    render(){
        return (
            <div>
               { this.props.studentBioVAR ? this.renderStudentBio(): <Spinner animation="grow" variant="success" /> }
            </div>
        );
    }
  }
  
  const mapStateToProps = state => {
       return {
             studentBioVAR: state.Student.studentBioVAR
       }
     }
     
     const mapDispatchToProps = dispatch => {
      return {
       goGetStudentBio: (values) => dispatch( getStudentBio(values))
      };
     };
   
   export default connect(mapStateToProps, mapDispatchToProps)(StudentBio);
  