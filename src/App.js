import TopBar from "./ManagerDashBord/MasterHome/TopBar/TopBar";
import Sidebar from "./ManagerDashBord/MasterHome/SideBar/SideBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import SideBar from "./ManagerDashBord/MasterHome/SideBar/SideBar";
import "./App.css"
import Home from "./ManagerDashBord/MasterHome/Home/Home";
import Teachers from "./ManagerDashBord/Pages/Teachers/Teachers";
import SingleTeacher from "./ManagerDashBord/Pages/Teachers/TeacherDeatails/SingleTeacher";
import NewTeacher from "./ManagerDashBord/Pages/Teachers/New Teacher/NewTeacher";
import Subjects from "./ManagerDashBord/Pages/Subjects/Subjects";
import Classes from "./ManagerDashBord/Pages/Classes/Classes";
import Students from "./ManagerDashBord/Pages/Students/StudentList"
import Calendar from "./ManagerDashBord/Pages/Calender/Calendar"
import Guardians from "./ManagerDashBord/Pages/Guardians/Guardians"
import Ranks from "./ManagerDashBord/Pages/Ranks/Ranks"
import Candidates from "./ManagerDashBord/Pages/Candidates/Candidates"
import Timetable from "./ManagerDashBord/Pages/Timetable/Timetable"
import Suport from "./ManagerDashBord/Pages/Support/Suport"
import NoMatchPage from "./NoMatchPage"
import StudentDetails from "./ManagerDashBord/Pages/Students/StudentDeatils/StudentDetails";
import NewStudent from "./ManagerDashBord/Pages/Students/NewStudent/NewStudent"
import NewSubject from "./ManagerDashBord/Pages/Subjects/NewSubject/NewSubject";
import SubjectDetails from "./ManagerDashBord/Pages/Subjects/SubjectDetails/SubjectDetails";
import NewClass from "./ManagerDashBord/Pages/Classes/NewClass/NewClass";
import ClassDetails from "./ManagerDashBord/Pages/Classes/ClassDetails/ClassDetails";
import GuardianDetails from "./ManagerDashBord/Pages/Guardians/GuardianDetails/GuardianDetails"
import NewGuardian from "./ManagerDashBord/Pages/Guardians/New Guardian/NewGuardian"
import CandidateDetails from "./ManagerDashBord/Pages/Candidates/Candidate Details/CandidateDetails";
import RankDetails from "./ManagerDashBord/Pages/Ranks/RankDetails/RankDetails";
import TeacherSideBar from "./TeacherDashboard/TeacherHome/Teacher SideBar/TeacherSideBar";

//these rAE THE TEACHER LINKS
import TeachersHome from "./TeacherDashboard/TeacherHome/TeacherHomeContents/Home"
import TeacherSubjects from "./TeacherDashboard/Pages/TeacherSubjects/TeacherSubjects"
import TeacherClasses from "./TeacherDashboard/Pages/TeacherClasses/TeacherClasses"
import TeacherStudents from "./TeacherDashboard/Pages/TeacherStudents/TeacherStudentList"
import TeacherGuardians from "./TeacherDashboard/Pages/TeacherGuardians/TeacherGuardians"
import StudentPerfomance from "./StudentPerfomance"
import TeacherClasesDetails from "./TeacherDashboard/Pages/TeacherClasses/ClassDetails/ClassDetails"
import TeacherStudentDeatils from "./TeacherDashboard/Pages/TeacherStudents/StudentDeatils/StudentDetails"
import TeacherGuardianDetails from "./TeacherDashboard/Pages/TeacherGuardians/GuardianDetails/GuardianDetails"

//the guardian vie 
import GuardianSideBar from "./GuardianDashBord/GuardianHome/Guardian SideBar/GuardianSideBar"
import GuardianHomeContents from "./GuardianDashBord/GuardianHome/GuardianHomeContents/GuardianHome"
import TeacherSubjectDetails from "./TeacherDashboard/Pages/TeacherSubjects/SubjectDetails/SubjectDetails"
import TeacherAssignments from "./TeacherDashboard/Pages/TeacherSubjects/TeacherAssignments/TeacherAssignments";




//the student view 
import StudentSideBar from "./StudentDashBoard/StudentHome/Student SideBar/StudentSideBar"
import StudentHome from "./StudentDashBoard/StudentHome/StudentHomeContents/Home"
import StudentSubjects from "./StudentDashBoard/StudentPages/StudentSubjects/StudentSubjects"
import StudendsGrades from "./TeacherDashboard/Pages/TeacherSubjects/StudentsGrades/StudentsGrades"
import StudentSubjectDetails from "./StudentDashBoard/StudentPages/StudentSubjects/SubjectDetails/SubjectDetails"
import StudentResults from "./StudentDashBoard/StudentPages/StudentResults/StudentResults"

//importing the landing page 
import LandingPage from "./LandingPage/LandingSkylabs"



class App extends Component {
  render() {

    return (

      <BrowserRouter>
        {/* <LandingPage /> */}

        <TopBar />
        <div className="containers">
          {/* <SideBar /> */}
          {/* <TeacherSideBar /> */}
          {/* <GuardianSideBar /> */}
          <StudentSideBar />


          <Routes>
            {/* admin dashbord routes */}
            <Route path='/Home' element={<Home />} />
            <Route path='/Teachers' element={<Teachers />} />
            <Route path='/Teacher/:teacherId' element={<SingleTeacher />} />
            <Route path='/NewTeacher' element={<NewTeacher />} />
            <Route path='/Subjects' element={<Subjects />} />
            <Route path='/Classes' element={<Classes />} />
            <Route path='/Students' element={<Students />} />
            <Route path='/Calendar' element={<Calendar />} />
            <Route path='/Guardians' element={<Guardians />} />
            <Route path='/Ranks' element={<Ranks />} />
            <Route path='/Candidates' element={<Candidates />} />
            <Route path='/Timetables' element={<Timetable />} />
            <Route path='/Supports' element={<Suport />} />
            <Route path='/*' element={<NoMatchPage />} />

            {/* admin student view routes */}
            <Route path='/Student/:studentid' element={<StudentDetails />} />
            <Route path='/NewStudent' element={<NewStudent />} />

            {/* admin subject view */}
            <Route path='/NewSubject' element={<NewSubject />} />
            <Route path='/Subject/:subjectid' element={<SubjectDetails />} />

            {/* admin class view */}
            <Route path='/NewClass' element={<NewClass />} />
            <Route path='/Class/:classid' element={<ClassDetails />} />

            {/* admin guardian view */}
            <Route path='/NewGuardian' element={<NewGuardian />} />
            <Route path='/Guardian/:guardianid' element={<GuardianDetails />} />

            {/* admin candidate view */}
            <Route path='/Candidate/:candidateid' element={<CandidateDetails />} />

            {/* admin rank view */}
            <Route path='/Rank/:candidateid' element={<RankDetails />} />




            {/* these are the routes to the teachers dashboard */}

            {/* teacher  view */}
            <Route path='/TeachersHome' element={<TeachersHome />} />
            <Route path='/TeacherSubjects' element={<TeacherSubjects />} />
            <Route path='/TeacherClasses' element={<TeacherClasses />} />
            <Route path='/TeacherStudents' element={<TeacherStudents />} />
            <Route path='/TeacherGuardians' element={<TeacherGuardians />} />
            <Route path='/TeacherSubjectDetails/:subjectid' element={<TeacherSubjectDetails />} />
            <Route path='/TeacherAssignments' element={<TeacherAssignments />} />
            <Route path='/StudendsGrades' element={<StudendsGrades />} />
            <Route path='/StudentPerfomance/:studentid' element={<StudentPerfomance />} />
            <Route path='/TeacherClasesDetails/:classid' element={<TeacherClasesDetails />} />
            <Route path='/TeacherStudentDeatils/:studentid' element={<TeacherStudentDeatils />} />
            <Route path='/TeacherGuardianDetails/:guardianid' element={<TeacherGuardianDetails />} />





            {/* here are the routes to the guardian vie  */}
            <Route path='/GuardianHomeContents' element={<GuardianHomeContents />} />


            {/* //here are the views for the student  */}
            <Route path='/StudentHome' element={< StudentHome />} />
            <Route path='/StudentSubjects' element={< StudentSubjects />} />
            <Route path='/StudentSubjectDetails/:guardianid' element={<StudentSubjectDetails />} />
            <Route path='/StudentResults/:studentid' element={<StudentResults />} />

          </Routes>

        </div>
      </BrowserRouter >
    );
  }
}
export default App