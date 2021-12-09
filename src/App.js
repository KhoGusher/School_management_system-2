import { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import HomeBase from "./BaseHome";
import SideBar from "./ManagerDashBord/MasterHome/SideBar/SideBar";
import "./App.css"

import ManagerHome from "./ManagerDashBord/MasterHome/Home/Home";
import Teachers from "./ManagerDashBord/Pages/Teachers/Teachers";
import NewTeacher from "./ManagerDashBord/Pages/Teachers/New Teacher/NewTeacher";
import TopBar from "./ManagerDashBord/MasterHome/TopBar/TopBar";
import Sidebar from "./ManagerDashBord/MasterHome/SideBar/SideBar";

import NewStudent from "./ManagerDashBord/Pages/Students/NewStudent/NewStudent"
import NewSubject from "./ManagerDashBord/Pages/Subjects/NewSubject/NewSubject";
import SubjectDetails from "./ManagerDashBord/Pages/Subjects/SubjectDetails/SubjectDetails";
import NewClass from "./ManagerDashBord/Pages/Classes/NewClass/NewClass";
import ClassDetails from "./ManagerDashBord/Pages/Classes/ClassDetails/ClassDetails";
import GuardianDetails from "./ManagerDashBord/Pages/Guardians/GuardianOperations/GuardianDetails"
import NewGuardian from "./ManagerDashBord/Pages/Guardians/New Guardian/NewGuardian"
import GuardianUpdate from './ManagerDashBord/Pages/Guardians/GuardianOperations/GuardianUpdate';
import CandidateDetails from "./ManagerDashBord/Pages/Candidates/CandidateOperations/CandidateDetails";
import RankDetails from "./ManagerDashBord/Pages/Ranks/RankOperations/RankDetails";


import SignUp from "./ManagerDashBord/Pages/Forms/SignUp";



import StudentList from "./ManagerDashBord/Pages/Students/StudentList";
import Guardians from "./ManagerDashBord/Pages/Guardians/Guardians";
import Subjects from "./ManagerDashBord/Pages/Subjects/SubjectTeacher";
import SubjectTeacher from "./ManagerDashBord/Pages/Subjects/SubjectTeacher";
import Classes from './ManagerDashBord/Pages/Classes/Classes';
import TeacherDetails from './ManagerDashBord/Pages/Teachers/TeacherOperations/TeacherDetails';
import TeacherUpdate from './ManagerDashBord/Pages/Teachers/TeacherOperations/TeacherUpdate';
import StudentUpdate from './ManagerDashBord/Pages/Students/StudentOperations/StudentUpdate';
import StudentDetails from './ManagerDashBord/Pages/Students/StudentOperations/StudentDetails';
import Ranks from './ManagerDashBord/Pages/Ranks/Ranks';
import NewRank from './ManagerDashBord/Pages/Ranks/NewRank/NewRank';
import RankUpdate from './ManagerDashBord/Pages/Ranks/RankOperations/RankUpdate';
import Candidates from './ManagerDashBord/Pages/Candidates/Candidates';
import CandidateUpdate from './ManagerDashBord/Pages/Candidates/CandidateOperations/CandidateUpdate';
import NewCandidate from './ManagerDashBord/Pages/Candidates/NewCandidate/NewCandidate';

// teachers
import TeacherHomeContents from './TeacherDashboard/TeacherHome/TeacherHomeContents/Home';
import TeacherSubjects from './TeacherDashboard/Pages/TeacherSubjects/TeacherSubjects'
import TeacherClasses from './TeacherDashboard/Pages/TeacherClasses/TeacherClasses'
import TeacherStudents from './TeacherDashboard/Pages/TeacherStudents/TeacherStudentList'
import TeacherGuardians from './TeacherDashboard/Pages/TeacherGuardians/TeacherGuardians'
import StudentPerfomance from './StudentPerfomance'

//the guardian vie 
import TeacherSubjectDetails from './TeacherDashboard/Pages/TeacherSubjects/SubjectDetails/SubjectDetails'
import TeacherNewAssignment from './TeacherDashboard/Pages/TeacherSubjects/NewAssignment/NewAssignment';

//the student view 
import StudentGrades from './TeacherDashboard/Pages/TeacherSubjects/StudentsGrades/StudentsGrades'
import TeacherAssignments from "./TeacherDashboard/Pages/TeacherSubjects/TeacherAssignmentsOperations/TeacherAssignments";
import TeacherAssignmentUpdate from "./TeacherDashboard/Pages/TeacherSubjects/TeacherAssignmentsOperations/TeacherAssignmentUpdate";
import StudentSubjects from "./StudentDashBoard/StudentPages/StudentSubjects/StudentSubjects";
import StudentComponentForGrades from "./StudentDashBoard/StudentPages/StudentResults/StudentComponentForGrades";
import StudentBio from "./StudentDashBoard/StudentPages/StudentBio";

//importing the landing page 
import LandingNavBar from "./LandingPage/Landing NavBar/NavBar"
import Footer from "./LandingPage/Pages/Footer"
import StudentHomeContents from "./StudentDashBoard/StudentHome/StudentHomeContents/HomeContents/StudentHomeContents";

import AdminSignIn from "./ManagerDashBord/Pages/Forms/AdminSignIn";
import TeacherSignIn from "./ManagerDashBord/Pages/Forms/TeacherSignIn";
import StudentSignIn from "./ManagerDashBord/Pages/Forms/StudentSignIn";
import PasswordRenew from "./ManagerDashBord/Pages/Forms/PasswordRenew";


class App extends Component {
  render() {

    let paths = (
      <Switch>
          <Route path='/' exact component={ HomeBase } />
          <Route path='/managerhome' exact component={ ManagerHome } />
          <Route path='/teachers' exact component={ Teachers } />
          <Route path='/teacher/update' exact component={ TeacherUpdate } />
          <Route path='/newteacher' exact component={ NewTeacher } />
          <Route path='/view/details' exact component={ TeacherDetails } />
          <Route path='/signup' exact component={ SignUp } />     
          <Route path='/admin/signin' exact component={ AdminSignIn } /> 
          <Route path='/signin/teacher' exact component={ TeacherSignIn } /> 
          <Route path='/student/signin' exact component={ StudentSignIn } />
          <Route path='/renew/password' exact component={ PasswordRenew } /> 

         {/* admin student view routes */}
            <Route path='/students' exact component={ StudentList } />
            <Route path='/student/update' exact component={ StudentUpdate } />
            <Route path='/studentdetails' exact component={ StudentDetails } />
            <Route path='/newstudent' exact component={ NewStudent } />

            {/* admin subject view */}
            <Route path='/subjects' exact component={ SubjectTeacher } />
            <Route path='/newsubject' exact component={ NewSubject } />
            <Route path='/subject/details' exact component={ SubjectDetails } />

            {/* admin class view */}
            <Route path='/classes' exact component={ Classes } />
            <Route path='/newclass' exact component={ NewClass } />
            <Route path='/class/:classid' exact component={ ClassDetails } />

            {/* admin guardian view */}
            <Route path='/guardians' exact component={ Guardians } />
            <Route path='/newguardian' exact component={ NewGuardian } />
            <Route path='/guardian/update' exact component={ GuardianUpdate } />
            <Route path='/guardian/details' exact component={ GuardianDetails } />

            {/* admin candidate view */}
            <Route path='/candidates' exact component={ Candidates } />
            <Route path='/newcandidate' exact component={ NewCandidate } />
            <Route path='/candidatedetails/:candidateid' exact component={ CandidateDetails } />
            <Route path='/candidate/:candidateid' exact component={ CandidateUpdate } />
            
            {/* admin rank view */}
            <Route path='/ranks' exact component={ Ranks } />
            <Route path='/newrank' exact component={ NewRank } />
            <Route path='/rank/:rankid' exact component={ RankUpdate } />
            <Route path='/details/rank/:rankid' exact component={ RankDetails } />

            { /* these below are links authorised for teacher to access */}
            { /* these below are links authorised for teacher to access */}
            { /* these below are links authorised for teacher to access */}

           
            <Route path='/teacherhome' exact component={ TeacherHomeContents } />
            <Route path='/teachersubjects' exact component={ TeacherSubjects } />
            <Route path='/teacherclasses' exact component={ TeacherClasses } />
            <Route path='/teacherstudents' exact component={ TeacherStudents } />
            <Route path='/teacherguardians' exact component={ TeacherGuardians } />
            <Route path='/teachersubjectdetails/:subjectid' exact component={ TeacherSubjectDetails } />
            <Route path='/new/teacher/assignments' exact component={ TeacherNewAssignment } />
            <Route path='/list/teacher/assignments' exact component={ TeacherAssignments } />
            <Route path='/teacher/assignment/:assignid' exact component={ TeacherAssignmentUpdate } />
            <Route path='/studentgrades' exact component={ StudentGrades } />
            <Route path='/studentperfomance/:subjectid' exact component={ StudentPerfomance } /> 

             
          {/*  student paths */}
 
             <Route path='/studenthome' exact component={ StudentHomeContents } />
             <Route path='/studentbios' exact component={ StudentBio } />
             <Route path='/studentsubjects' exact component={ StudentSubjects } />
             <Route path='/studentcompo/grades' exact component={ StudentComponentForGrades } /> 

             <Redirect to="/" /> 
      </Switch>
    );

    return (
      <div>
      
        <LandingNavBar />
              
          <div className="containers">

        { paths }
        
      </div>
        <Footer />
      </div>
    
    );
  }
}
export default App