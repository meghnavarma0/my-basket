import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li
      key={props.key}
      style={{
        background: props.bgc,
      }}
      className={classes.Item}
    >
      {props.children}
    </li>
  );
};

export default Item;
