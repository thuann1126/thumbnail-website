import React from "react";
import NavigationBar from "../Header-footer/NavigationBar";
import Footer from "../Header-footer/Footer";
import "../Home/Slogan.css";
import "./Galery.css";


export default function Galery() {
  return (
    <>
      <div>
        <NavigationBar />
        <div className="slogan">Thumbnail Beauty's Galery</div>
        

        <div className="servicesTitle">
          <div className="titleItems">Manicures</div>
          <div className="titleItems">Pedicures</div>
          <div className="titleItems">Nail Extension</div>
          <div className="titleItems">Add ons</div>
        </div>
        <Footer />
      </div>
      
    </>
  );
}
