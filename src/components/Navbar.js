import * as React from 'react';
import '../components/Navbar.css'


export default function Navbar() {
  return (
     <>
     <nav className="nav">
        <div className="navbox">

          <ul className="nav_item" id="myname">
            <li className="home active " ><a href>Home</a></li>
            {/* <li className="about "><a href>About</a></li> */}
            {/* <li className="resume "><a href>Resume</a></li> */}
            <li className="socials"><a href>Socials</a></li> 
          </ul>
        </div>
      </nav>
     </>
  )
}
