import React, { useState } from "react";
import basketImg from "../../../assets/Images/black-shopping-basket.png";
import dustbinIcon from "../../../assets/Images/dustbin.png";
import minusIcon from "../../../assets/Images/minus.png";
import Item from "../Item/Item";
import classes from "./Basket.module.css";

const Basket = (props) => {
  return (
    <div>
      <div className={classes.Container}>
        <header className={classes.Heading}>
          <img className={classes.Img} src={basketImg} alt="basket" />
          <b>Basket</b>
        </header>

        <img
          onClick={props.onDustbinClickedHandler}
          className={classes.Dustbin}
          src={dustbinIcon}
          alt="dustbin"
        />
      </div>

      <ul style={{ listStyleType: "none" }}>
        {props.bucketList.length > 0 ? (
          props.bucketList.map((item, index) => {
            const bgc = index % 2 === 0 ? "#f9f9f9" : "#efefef";

            return (
              <Item
                key={index}
                bgc={bgc}
                onClickHandler={props.onBasketClickHandler}
                value={item.id}
                icon={minusIcon}
              >
                {`${item.count} ${item.grocery}`}
              </Item>
            );
          })
        ) : (
          <Item>Your basket is empty!</Item>
        )}
      </ul>
    </div>
  );
};

export default Basket;
