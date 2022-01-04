import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./NavigationBar.css";
import "../Link.css";

export default function NavigationBar() {
  const[status, setStatus] = useState('');
  const[showColumn, setShowColumn] = useState('');
  const showNavBar = () => {

    if(status === 'visible' && showColumn === 'block'){
      setStatus('hidden'); 
      setShowColumn('flex');  
    }
    else
      setStatus('visible');
      setShowColumn('block');        
    
    let navBar = document.querySelector(".navigator");
    navBar.style.visibility = status;  
    navBar.style.display = showColumn;
  };

  return (
    <div>      
      <div className="dropDownMenu">
        <ul className="navigator summaryBar">
          <img
            id="list-icon"
            src="https://icons-for-free.com/iconfiles/png/512/list+list+icon+menu+menu+icon+icon-1320165661814559795.png"
            onClick={showNavBar}
          ></img>
                   
          <li className="navigator_elements" ><Link to="/" className="linkdec">HOME</Link></li>
          <li className="navigator_elements"><Link to="/menu" className="linkdec">MENU</Link></li>
          <li className="navigator_elements"><Link to="/galery" className="linkdec">GALERY</Link></li>
          <li className="navigator_elements"><Link to="/aboutus" className="linkdec">ABOUT US</Link></li>
          <li className="navigator_elements navigator_login"><Link to="/signin" className="linkdec">SIGN IN</Link></li>
        </ul>
      </div>
    </div>
  );
}
