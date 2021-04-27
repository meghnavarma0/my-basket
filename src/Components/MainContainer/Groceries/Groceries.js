import React, { useState } from "react";
import groceryImg from "../../../assets/Images/grocery.png";
import Item from "../Item/Item";
import classes from "./Groceries.module.css";

const Groceries = () => {
  const groceryList = ["apple", "banana", "mango", "grapes", "eggs"];
  return (
    <div>
      <header className={classes.Heading}>
        <img className={classes.Img} src={groceryImg} alt="basket" />
        <b>Groceries</b>
      </header>
      <ul style={{ listStyleType: "none" }}>
        {groceryList.map((item, index) => {
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

export default Groceries;
