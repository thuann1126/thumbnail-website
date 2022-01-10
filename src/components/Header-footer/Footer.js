import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      
        <div className="content">
          
            <div className="location">
              <p> <strong>LOCATION</strong></p>
              <p>32 White Tail Crescent</p>
              <p>Brampton, ON L6Y 5C2</p>
              <p>(+1) 437 288 9397</p>              
            </div>       

          
            <div className="hours">
              <p><strong>HOURS</strong></p>
              <p>Monday to Saturday: 10 a.m - 8 p.m</p>
              <p>Holiday: 10 a.m - 4 p.m</p>
              <p>Sunday: Closed</p>
            </div>          

          <div className="copyright">Copyright 2022 Thumbnail Beauty | Brampton, ON</div>
        </div>
      
    </>
  );
}
