import TopBar from "./ManagerDashBord/MasterHome/TopBar/TopBar";
import Sidebar from "./ManagerDashBord/MasterHome/SideBar/SideBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import SideBar from "./ManagerDashBord/MasterHome/SideBar/SideBar";
import "./App.css"
import Home from "./ManagerDashBord/MasterHome/Home/Home";
import Teachers from "./ManagerDashBord/Pages/Teachers/Teachers";
import SingleTeacher from "./ManagerDashBord/Pages/Teachers/TeacherDeatails/SingleTeacher";

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
            <Route path='/Home' element={<Home />} />
            {/* <Route exact path='/' element={<Login />} />
            {/* <Route path='/dashboard' element={<DashBoard />} /> */}
            {/* <Route path='/customers' element={<CustomersList />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/SignUp' element={<SignUp />} />*/}
            <Route path='/Teachers' element={<Teachers />} />
            <Route path='/Teacher/:teacherId' element={<SingleTeacher />} />
            {/*<Route path='/Teacher/:teacherId' element={<SingleTeacher />} />
            <Route path='/Subjects' element={<Subjects />} />
            <Route path='/Calendar' element={<Calendar />} />
            <Route path='/Classes' element={<Classes />} />
            <Route path='/Students' element={<Students />} />
            <Route path='/Guardians' element={<Guardians />} />
            <Route path='/Ranks' element={<Ranks />} />
            <Route path='/Candidates' element={<Candidates />} />
            <Route path='/Calender' element={<Calendar />} />
            <Route path='/Timetable' element={<Timetable />} />
            <Route path='/Support' element={<Suport />} />
            

            <Route path='/*' element={<NoMatchPage />} />  */}
          </Routes>

        </div>
      </BrowserRouter >
    );
  }
}
export default App