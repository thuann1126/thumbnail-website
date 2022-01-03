import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  const showNavBar = () => {
    document.getElementsByClassName("navigator").style.visibility = "hidden";
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
                   
          <li className="navigator_elements">HOME</li>
          <li className="navigator_elements">MENU</li>
          <li className="navigator_elements">GALERY</li>
          <li className="navigator_elements">ABOUT US</li>
          <li className="navigator_elements navigator_login">SIGN IN</li>
        </ul>
      </div>
    </div>
  );
}
