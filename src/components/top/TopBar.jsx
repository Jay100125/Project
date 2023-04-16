import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcons fa-brands fa-square-facebook"></i>
        <i className="topIcons fa-brands fa-square-instagram"></i>
        <i className="topIcons fa-brands fa-square-twitter"></i>
        <i className="topIcons fa-brands fa-square-snapchat"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topList-item">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topList-item"><Link className="link" to="/">WRITE</Link></li>
          <li className="topList-item"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topList-item"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topList-item">{user && "LOGOUT"}</li>
          
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
            className = "topImage" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcpxzUHn4Kv7MVaMyeWhF3vwgZUzOI02VQ&usqp=CAU" alt="" />
          ) : (
            <ul className="topList">
              <li className="topList-item">
                  <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topList-item">
                  <Link className="link" to="/register">REGISTER</Link>
              </li>
          </ul>)
        }
        
      <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
  
}
