import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      
        <div className="content">
          
            <ul className="location">
              <li> <strong>LOCATION</strong></li>
              <li>32 White Tail Crescent</li>
              <li>Brampton, ON L6Y 5C2</li>
              <li>(+1) 437 288 9397</li>              
            </ul>       

          
            <ul className="hours">
              <li><strong>HOURS</strong></li>
              <li>Monday to Saturday: 10 a.m - 8 p.m</li>
              <li>Holiday: 10 a.m - 4 p.m</li>
              <li>Sunday: Closed</li>
            </ul>          

          <div className="copyright">Copyright 2022 Thumbnail Beauty | Brampton, ON</div>
        </div>
      
    </>
  );
}
