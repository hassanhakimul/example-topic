import React from 'react';
import logo from '../../images/pic.jpg'
import './Header.css'
const Header = () => {
    return (
           <nav className='nav'>
              <img src={logo} alt="" />
              <div className='nav-detail'>
              <h1>MealDB</h1>
              <ul className='ul'>
                  <li><a href="/Home">Home</a></li>
                  <li><a href="/Abou us">About us</a></li>
                  <li><a href="/subscribe">subscribe</a></li>
                  <li><a href="/Contact">Contact</a></li>
              </ul>
              </div>
              
            
               </nav> 
    );
};

export default Header;