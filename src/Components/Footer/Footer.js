import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div>
        <a className={classes.Links} href="http://localhost:3000/">
          All,
        </a>{" "}
        <a className={classes.Links} href="http://localhost:3000/">
          Pending,
        </a>{" "}
        <a className={classes.Links} href="http://localhost:3000/">
          Purchased
        </a>
      </div>
    </div>
  );
};

export default Footer;
