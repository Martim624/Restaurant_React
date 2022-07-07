import React, { useState } from "react";
import { checked, checkChecked } from "../App";

const Meal = ({
  key,
  strMeal,
  strMealThumb,
  idMeal,
  price,
}: {
  key: string;
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  price: number;
}) => {
  const [check, setChecked] = useState(checked.includes(idMeal));

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkChecked(idMeal, e.target.checked);

    setChecked(e.target.checked);
  }; // 100

  return (
    <>
      <div>
        <br></br>
        <img src={strMealThumb} alt={strMeal} className="expense-image" />
        {strMeal} {price}${" "}
        <input
          type="checkBox"
          value={price}
          onChange={handler}
          checked={check}
          required
        ></input>
      </div>
    </>
  );
};

export default Meal;
