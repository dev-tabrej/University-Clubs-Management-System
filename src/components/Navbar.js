import * as React from 'react';
import '../components/Navbar.css';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
     <>
     <nav className="nav">
        <div className="navbox">

          <ul className="nav_item" id="myname">
            <li className="home active " ><Link to="/">Home</Link></li>
            <li className="socials"><Link to="/components/Login">Login</Link></li> 
          </ul>
        </div>
      </nav>
     </>
  )
}
