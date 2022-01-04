import React from "react";
import NavigationBar from "../Header-footer/NavigationBar";
import Footer from "../Header-footer/Footer";
import ImagesList from "./ImagesList";
import Slogan from "./Slogan";

export default function Homepage() {
  return (
    <div>
      <NavigationBar />
      <Slogan />
      <ImagesList />
      <Footer />
    </div>
  );
}
