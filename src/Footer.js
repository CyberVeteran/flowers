import React from "react";
import "./Footer.css";
import { useLocation } from 'react-router-dom';


function Footer() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return null;
  }
  return (

    <div className="footer">
      <div className="contact">
        <h3>Contact me</h3>
        <p>Phone: +1234567890</p>
        <p>Email: info@example.com</p>
        <p> v.Zelena Fenturaly street  </p>
      </div>
      <div className="social">
        <h3>Follow me</h3>
        <ul>
          <li>
            <a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Footer;