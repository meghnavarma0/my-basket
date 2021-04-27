import React, { useState } from "react";
import basketImg from "../../../assets/Images/black-shopping-basket.png";
import Item from "../Item/Item";
import classes from "./Basket.module.css";

const Basket = () => {
  const basketList = ["apple", "banana", "mango"];
  return (
    <div>
      <header className={classes.Heading}>
        <img className={classes.Img} src={basketImg} alt="basket" />
        <b>Basket</b>
      </header>
      <ul style={{ listStyleType: "none" }}>
        {basketList.map((item, index) => {
          const bgc = index % 2 === 0 ? "#f9f9f9" : "#efefef";
          return (
            <Item key={index} bgc={bgc}>
              {item}
            </Item>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
