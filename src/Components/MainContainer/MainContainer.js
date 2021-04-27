import React from "react";
import classes from "./MainContainer.module.css";
import Basket from "./Basket/Basket";
import Groceries from "./Groceries/Groceries";

const MainContainer = () => {
  return (
    <div className={classes.MainContainer}>
      <Groceries />
      <Basket />
    </div>
  );
};

export default MainContainer;
