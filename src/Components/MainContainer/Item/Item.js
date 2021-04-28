import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li
      style={{
        background: props.bgc,
      }}
      className={classes.Item}
      onClick={() => props.onClickHandler(props.value)}
    >
      {props.icon ? (
        <img className={classes.Icon} src={props.icon} alt="icon" />
      ) : (
        <span className={classes.Icon}></span>
      )}
      {props.children}
    </li>
  );
};

export default Item;
