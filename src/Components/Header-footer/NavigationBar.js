import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import "../Link.css";

export default function NavigationBar() {
  const [status, setStatus] = useState("hidden");
  let navBar = document.querySelector(".navigator");

  const showNavBar = () => {
    if (status === "hidden") {
      setStatus("visible");
      navBar.classList.toggle("navigator-dropdown");
    } else {
      setStatus("hidden");
      navBar.classList.toggle("navigator");
    }
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

          <Link to="/" className="linkdec">
            <li className="navigator_elements">HOME</li>
          </Link>

          <Link to="/menu" className="linkdec">
            <li className="navigator_elements">MENU</li>
          </Link>

          <Link to="/galery" className="linkdec">
            <li className="navigator_elements">GALERY</li>
          </Link>

          <Link to="/aboutus" className="linkdec">
            <li className="navigator_elements">ABOUT US</li>
          </Link>

          <Link to="/signin" className="linkdec">
            <li className="navigator_elements navigator_login">SIGN IN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
