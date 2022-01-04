import React from "react";
import BookButton from "../BookButton";
import "./Slogan.css";

export default function Slogan() {
  return (
    <div>
      <div className="slogan">
        <div>Thumbnail Beauty</div>
        <div className="slogan_subtitle">Nail & hair salon</div>           
      </div>
      <img src="https://static.dezeen.com/uploads/2019/03/leo-nail-salon-solstice-interiors-san-diego-california-usa_dezeen_2364_hero.jpg"></img>
      <BookButton/>
    </div>
  );
}
