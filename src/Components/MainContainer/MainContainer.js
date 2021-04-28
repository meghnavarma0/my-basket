import React, { useState } from "react";
import classes from "./MainContainer.module.css";
import Basket from "./Basket/Basket";
import Groceries from "./Groceries/Groceries";
import SearchBar from "../SearchBar/SearchBar";

const groceryList = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushroom",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter",
  "Chicken",
  "Beef",
  "Pork",
  "Fish",
  "Rice",
  "Pasta",
  "Bread",
];

const MainContainer = () => {
  const [bucketList, setBucketList] = useState([]);
  const [grList, setGrList] = useState(groceryList);
  const onGroceryClickHandler = (id) => {
    let newList = [];
    let flag = true;
    for (let i = 0; i < bucketList.length; i++) {
      let newVal = bucketList[i];
      if (bucketList[i].id === id) {
        newVal.count += 1;
        flag = false;
      }

      newList.push(newVal);
    }
    if (flag) {
      newList.push({
        id,
        count: 1,
        grocery: groceryList[id],
      });
    }
    setBucketList(newList);
  };

  const onBasketClickHandler = (id) => {
    let newList = [];

    for (let i = 0; i < bucketList.length; i++) {
      let newVal = bucketList[i];
      if (bucketList[i].id === id) {
        newVal.count -= 1;
      }

      if (newVal.count === 0) {
        continue;
      }

      newList.push(newVal);
    }

    setBucketList(newList);
  };

  const onDustbinClickedHandler = () => {
    setBucketList([]);
  };

  const onInputChangedHandler = (e) => {
    const val = e.target.value.trim();
    const newGrList = grList.filter(
      (item) => item.toLowerCase().slice(0, val.length) === val.toLowerCase()
    );
    if (val === "") {
      setGrList(groceryList);
      return;
    }
    setGrList(newGrList);
  };

  return (
    <div>
      <SearchBar onInputChangedHandler={onInputChangedHandler} />
      <div className={classes.MainContainer}>
        <Groceries
          groceryList={grList}
          onGroceryClickHandler={onGroceryClickHandler}
        />
        <Basket
          bucketList={bucketList}
          onBasketClickHandler={onBasketClickHandler}
          onDustbinClickedHandler={onDustbinClickedHandler}
        />
      </div>
    </div>
  );
};

export default MainContainer;
