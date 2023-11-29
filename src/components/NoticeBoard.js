// NoticeBoard.js
import React from 'react';
import './NoticeBoard.css';

function NoticeBoard({ notices }) {
  return (
    <div className='notice-container'>
      <h2>Notice Board</h2>
      <div className="notice-board">
        <div className='notice-list'>
          <ul>
            {notices.map((notice, index) => (
              <li key={index}>{notice}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
