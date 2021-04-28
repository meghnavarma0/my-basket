import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [item, setItem] = useState("");
  return (
    <div className={classes.SearchBar}>
      <form action="submit">
        <input
          onChange={(e) => {
            setItem(e.target.value);
            props.onInputChangedHandler(e);
          }}
          className={classes.Input}
          type="text"
          placeholder="Search Item"
          value={item}
        />
      </form>
    </div>
  );
};

export default SearchBar;
