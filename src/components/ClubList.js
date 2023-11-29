import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClubList.css';
import {Link} from 'react-router-dom';
function ClubList() {
  const [clubs, setClubs] = useState([{id:1,name:"Science-Club"},{id:2,name:"Arts-Club"},{id:3,name:"Sports-Club"}]);
  useEffect(() => {
    axios.get('http://localhost:8000/clubs/')
      .then(response => setClubs(response.data))
      .catch(error => console.error('Error fetching clubs:', error));
  }, []);

  return (
    <div>
      <h2 >Clubs</h2>
      <ul className='clubs'>
        {clubs.map(club => (
          <li key={club.id} className='club'><Link >{club.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;
