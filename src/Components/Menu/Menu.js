import React, { useState, useEffect } from "react";
import NavigationBar from "../Header-footer/NavigationBar";
import Footer from "../Header-footer/Footer";
import BookButton from "../BookButton";
import { db } from "../../Firebase/FirebaseConfig";
import "../Home/Slogan.css";
import "./Menu.css";

export default function Menu() {
  const [manicuresPrice, setManicuresPrice] = useState([]);
  const [nail_extensions_Price, setNail_extensions_Price] = useState([]);
  const [pedicuresPrice, setPedicuresPrice] = useState([]);
  const [add_ons_price, setAdd_ons_price] = useState([]);
  useEffect(() => {
    async function fetchSubject() {
      const querySnapshot = await db
        .collection("PriceList")
        .doc("Services")
        .get();
      const data = querySnapshot.data();

      setManicuresPrice(data.Manicures);
      setNail_extensions_Price(data.Nail_extensions);
      setPedicuresPrice(data.Pedicures);
      setAdd_ons_price(data.Add_ons);
    }
    fetchSubject();
  }, []);

  const printManicuresPrice = manicuresPrice.map((item) => {
    return (
      <>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      </>
    );
  });
  const printNail_extensions_Price = nail_extensions_Price.map((item) => {
    return (
      <>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      </>
    );
  });
  const printPedicuresPrice = pedicuresPrice.map((item) => {
    return (
      <>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      </>
    );
  });
  const printAdd_ons_price = add_ons_price.map((item) => {
    return (
      <>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <NavigationBar />
        <div className="slogan">
          <div>Thumbnail Beauty</div>
          <div className="slogan_subtitle">Nail & hair salon</div>
        </div>
        <div className="menuContent">
          <div>PRICES VARY BY STYLIST</div>
          <div>MANICURES</div>
          <div className="itemList">{printManicuresPrice}</div>
          <div>NAIL EXTENSION</div>
          <div className="itemList">{printNail_extensions_Price}</div>
          <div>PEDICURES</div>
          <div className="itemList">{printPedicuresPrice}</div>
          <div>ADD ONS</div>
          <div className="itemList">{printAdd_ons_price}</div>
          
        </div>
        <BookButton/>
        
      </div>
      <Footer />
    </>
  );
}
