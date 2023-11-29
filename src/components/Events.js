
import React from 'react';
import "./Events.css"
import {Link} from "react-router-dom";

function Events({ events }) {
  return (
    <div className='events'>
      <h2 className='events-header'>Events</h2>
      
      <ul>
        {events.map((event, index) => (
          <li key={index}><div className="event_name">
            <Link>{event.name}</Link>
            <p>{event.detail}</p>
            </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
