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



class App extends Component {
  render() {

    return (
      // <div>
      //     <TopBar />
      //     <div className="containers">
      //         <SideBar />
      //         <Home />

      //     </div>
      // </div>


      <BrowserRouter>

        {/* <NavBar /> */}
        <TopBar />
        <div className="containers">
          <SideBar />


          {/* <Teachers /> */}
          {/* <Home /> */}


          {/* <NavBar />
              <Client /> */}

          <Routes>
            {/* //<Home /> */}

            {/* <Route exact path='/' element={<Login />} />
            {/* <Route path='/dashboard' element={<DashBoard />} /> */}
            {/* <Route path='/customers' element={<CustomersList />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/SignUp' element={<SignUp />} />*/}
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


          </Routes>

        </div>
      </BrowserRouter >
    );
  }
}
export default App