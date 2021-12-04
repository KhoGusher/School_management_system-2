import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FaAlignJustify, FaFacebookSquare, FaCalendarDay, FaWhatsappSquare, FaHome, FaChalkboardTeacher, FaCodeBranch, FaUserGraduate, FaTwitterSquare } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdTimer, MdSupport, MdNotificationsActive, MdEmail } from 'react-icons/md'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar_style" >
                    <div className="container-fluid " >
                        <a className="navbar-brand" href="/#">SkyLabs360</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link " to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/Login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/SignUp">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/services">Services</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link " to="/">
                                        <FaTwitterSquare />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/Login">
                                        <FaFacebookSquare />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/SignUp">
                                        <MdEmail />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/aboutus">
                                        <FaWhatsappSquare />
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav> */}
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