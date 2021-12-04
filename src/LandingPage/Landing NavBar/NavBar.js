import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FaAlignJustify, FaFacebookSquare, FaCalendarDay, FaWhatsappSquare, FaHome, FaChalkboardTeacher, FaCodeBranch, FaUserGraduate, FaTwitterSquare } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdTimer, MdSupport, MdNotificationsActive, MdEmail } from 'react-icons/md'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <header className='header'>
                    <div>
                        <a className="logo" href="/#">SkyLabs360</a>
                        <Link className='links' to='/'>
                            Home
                        </Link>
                        <Link className='links' to='/services'>
                            Services
                        </Link>
                        <Link className='links' to="/aboutus">
                            AboutUs
                        </Link>
                    </div>
                    <div>

                        <Link className='links' to='/facebook'> <FaFacebookSquare />
                        </Link>
                        <Link className='links' to='/twitter'><FaTwitterSquare />
                        </Link>
                        <Link className='links' to="/email"> <MdEmail />
                        </Link>
                        <Link className='links' to="/Whatsapp"> <FaWhatsappSquare />
                        </Link>
                    </div>


                    <nav className='navbar'>
                        <ul>
                            <Link className='links' to="/Login">
                                Login
                            </Link>
                            <Link className='links' to="/SignUp">
                                Sign Up
                            </Link>
                        </ul>
                    </nav>

                </header>
            </React.Fragment>)

    }
}
export default NavBar