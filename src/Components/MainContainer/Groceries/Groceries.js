import React, { useState } from "react";
import groceryImg from "../../../assets/Images/grocery.png";
import Item from "../Item/Item";
import classes from "./Groceries.module.css";
import plusIcon from "../../../assets/Images/plus-sign.png";

const Groceries = (props) => {
  return (
    <div>
      <header className={classes.Heading}>
        <img className={classes.Img} src={groceryImg} alt="basket" />
        <b>Groceries</b>
      </header>
      <ul style={{ listStyleType: "none" }}>
        {props.groceryList.map((item, index) => {
          const bgc = index % 2 === 0 ? "#f9f9f9" : "#efefef";
          return (
            <Item
              key={index}
              value={index}
              bgc={bgc}
              onClickHandler={props.onGroceryClickHandler}
              icon={plusIcon}
            >
              {item}
            </Item>
          );
        })}
      </ul>
    </div>
  );
};

export default Groceries;
