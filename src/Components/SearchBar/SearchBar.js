import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <form action="submit">
        <input className={classes.Input} type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
