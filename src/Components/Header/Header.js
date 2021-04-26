import React from "react";
import classes from "./Header.module.css";
import basket from "../../assets/Images/shopping-basket.png";

const Header = () => {
  return (
    <div className={classes.Header}>
      <img className={classes.Basket} src={basket} alt="basket" />
      <h1 className={classes.Title}>Hello, Basket!</h1>
    </div>
  );
};

export default Header;
