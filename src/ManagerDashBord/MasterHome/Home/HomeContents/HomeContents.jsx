import React from 'react'
import { connect } from 'react-redux';
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople } from 'react-icons/md'
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { getAdminHomeDisplays } from '../../../../Controllers/Admin';
import "./HomeContents.css";

class HomeContents extends React.Component {

          state = {
            toRefresh: null
       }


    componentDidMount(){

        const temp = localStorage.getItem('data');
        const updated = JSON.parse(temp);
     
        if(updated.identity.startsWith("AMW")){
        let data = {
            schoolId: updated.schoolid
          }
        this.props.goGetAdminHomeDisplays(JSON.stringify(data));
           }

        else {
             this.props.homeProps.history.push("/");
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
            this.props.goGetAdminHomeDisplays(JSON.stringify(data));
         } 
      }
    }

renderAdminHomeData = () => {
    
    let data, tempStudent, studentMaleCount, studentFemaleCount, tempTeacher, teacherMaleCount, teacherFemaleCount;
        data = this.props.adminHomeDisplaysVAR;
        tempStudent = data.studentGenderVAR.length;
        tempTeacher = data.teacherGenderVAR.length;
 if(tempStudent == 1){
     if(data.studentGenderVAR[0].gender == 'Male'){
        studentMaleCount = data.studentGenderVAR[0].count;
     } 
     if(data.studentGenderVAR[0].gender == 'Female'){
        studentFemaleCount = data.studentGenderVAR[0].count;
    } 
 }
 if(tempStudent == 2){
    studentMaleCount = data.studentGenderVAR[0].count;
    studentFemaleCount = data.studentGenderVAR[1].count;
}

 if(tempTeacher == 1){
    if(data.teacherGenderVAR[0].gender == 'Male'){
       teacherMaleCount = data.teacherGenderVAR[0].count;
    }
    if(data.teacherGenderVAR[0].gender == 'Female'){
       teacherFemaleCount = data.teacherGenderVAR[0].count;
   }
}

if(tempTeacher == 2){
    teacherMaleCount = data.teacherGenderVAR[0].count;
    teacherFemaleCount = data.teacherGenderVAR[1].count;
}

return (
<div className="home">
    <div className="HomeContents">
<Link to="/teachers" style={{ textDecoration: 'none' }}>
 <div className="homeContentIterm">

    <FaChalkboardTeacher size="8em" />
    <span className="homeContentitermTitle">Teachers</span>
    <div className="homeContenterContents">
        <span className="homeContenterContentsSub">Males: {data.teacherGenderVAR[1].count} </span>
    </div>
    <span className="homeContenterContentsSub">Females: {data.teacherGenderVAR[0].count}</span>
 </div>
</Link>
<Link to="/students" style={{ textDecoration: 'none' }}>
    <div className="homeContentIterm">
        {/* <img src={Student} alt="" /> */}
        <MdPeople size="8em" />
        <span className="homeContentitermTitle">Students</span>
        <div className="homeContenterContents">
            <span className="homeContenterContentsSub">Males: {studentMaleCount}</span>
        </div>
        <span className="homeContenterContentsSub">Females:{studentFemaleCount}</span>
    </div>
</Link>
<Link to="/candidates" style={{ textDecoration: 'none' }}>
<div className="homeContentIterm">
    {/* <img src={Student} alt="" /> */}
    <FaUserGraduate size="8em" />
    <span className="homeContentitermTitle">Candidates</span>
    <div className="homeContenterContents">
        <span className="homeContenterContentsSub">Males:{studentMaleCount}</span>
    </div>
    <span className="homeContenterContentsSub">Females:{studentFemaleCount}</span>
</div>
</Link>

        </div>
        <div className="HomeContents" style={{ textDecoration: 'none' }}>
            <Link to="/subjects">
                <div className="homeContentIterm">
                    {/* <img src={Subjects} alt="" /> */}
                    <MdSubject size="8em" />
                    <span className="homeContentitermTitle">Subjects</span>
                    <div className="homeContenterContents">
                        <span className="homeContenterContentsSub">Total: {data.subjectCountVAR[0].count}</span>
                    </div>

                </div>
            </Link>
            <Link to="/classes" style={{ textDecoration: 'none' }}>
                <div className="homeContentIterm">
                    {/* <img src={School} alt="" /> */}
                    <MdClass size="8em" />
                    <span className="homeContentitermTitle">Classes</span>
                    <div className="homeContenterContents">
                        <span className="homeContenterContentsSub">Total:{data.classCountVAR[0].count}</span>
                    </div>

                </div>
            </Link>
            <Link to="/ranks" style={{ textDecoration: 'none' }}>
                <div className="homeContentIterm">
                    {/* <img src={Ranking} alt="" /> */}    
                    <FaCodeBranch size="8em" />
                    <span className="homeContentitermTitle">Ranks</span>
                    <div className="homeContenterContents">
                        <span className="homeContenterContentsSub">Total:{data.rankCountVAR[0].count}</span>
                    </div>

                </div>
            </Link>

 
            <Link to="/guardians" style={{ textDecoration: 'none' }}>
                <div className="homeContentIterm">
                    <FaCodeBranch size="8em" />
                    <span className="homeContentitermTitle">Guardians</span>
                    <div className="homeContenterContents">
                        <span className="homeContenterContentsSub">Total: </span>
                    </div>

                </div>
            </Link>

        </div>

    </div>
    )
}

    render(){
       
        return (
           <div>
               { this.props.adminHomeDisplaysVAR ? this.renderAdminHomeData(): <Spinner animation="grow" variant="success" /> }
           </div>

        );
    }
}


const mapStateToProps = state => {
    return {
      adminHomeDisplaysVAR: state.Admin.adminHomeDisplaysVAR
    }
  }

  const mapDispatchToProps = dispatch => {
   return {
       goGetAdminHomeDisplays: (values) => dispatch( getAdminHomeDisplays(values))
   };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContents);