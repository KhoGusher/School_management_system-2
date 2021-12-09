import React from 'react';
import { connect } from 'react-redux';
import { MdSubject, MdPayments } from 'react-icons/md';
import { Link } from "react-router-dom";
import { VscGraphLine } from "react-icons/vsc";
//VscAccount

import "./HomeContents.css";


class StudentHomeContents extends React.Component {

    state = {
        classes: null,
        toRefresh: null
   }

   componentDidMount(){
      
    const temp = localStorage.getItem('data');
    const updated = JSON.parse(temp);
       
    if(updated.identity.startsWith("SMW")){
             
    }
     else {

         this.props.history.push("/");
      }
    }
    
    render(){
      return (
        <div className="home">
            <div className="HomeContents">

                <Link to="/StudentSubjects">
                    <div className="homeContentIterm">
                        <MdSubject size="8em" />
                        <span className="homeContentitermTitle">Subjects</span>
             
                    </div>
                </Link>
                <Link to="/studentcompo/grades">
                    <div className="homeContentIterm">

                        <VscGraphLine size="8em" />
                        <span className="homeContentitermTitle">Perfomance</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Assessments/Exam Results</span>
                        </div>

                    </div>
                </Link>
                <Link to="/studentbios">
                    <div className="homeContentIterm">
                        <MdPayments size="8em" />
                        <span className="homeContentitermTitle">My Bio</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">My information</span>
                        </div>

                    </div>
                </Link>

            </div>

        </div>
         );
      }
    }
   
    export default StudentHomeContents;
