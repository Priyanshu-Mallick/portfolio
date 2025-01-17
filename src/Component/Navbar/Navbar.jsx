import React from 'react';
import './Navbar.css';
import Icon from '../../img/Priyanshu.jpg';

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        {/* <div className='icon'>
          <img src={Icon} alt=''></img>
        </div> */}
        <div className="n-name">Priyanshu</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">Contact Us</button>
      </div>
    </div>
  );
};
