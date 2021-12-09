import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"
import { FaAlignJustify, FaFacebookSquare, FaCalendarDay, FaWhatsappSquare, FaHome, FaChalkboardTeacher, FaCodeBranch, FaUserGraduate, FaTwitterSquare } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdTimer, MdSupport, MdNotificationsActive, MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Sign in</button>
        </li>
        <li>
          <button>Create Account</button>
        </li>
        <li>

          <button>Services</button>
        </li>

      </ul>
      <ul>
        <div className="address">
          <div>Address: </div>
          <div>SkyLabs360 ,</div>
          <div>C.E.O, </div>
          <div>P.O box 280,</div>
          <div>Zomba.</div>
          <div>Exact Loaction: </div>
          <div>Near NBS Bank</div>

        </div>
      </ul>
      <ul>
        <li>
          <button>AboutUs</button>
        </li>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
          <button>Contact Support</button>
        </li>
        <li>
          <button>Suggestion Box</button>
        </li>

      </ul>

      <ul>
        <li>
          <li>
            <button>Feeds</button>
          </li>
          <li>
            <button><FaFacebookSquare />Facebook</button>
          </li>
          <li>
            <button>
              <FaTwitterSquare />Twitter
            </button>
          </li>
          <li>
            <button>
              <MdEmail />Email
            </button>
          </li>
          <li>
            <button>
              <FaWhatsappSquare />Whatsapp
            </button>
          </li>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
