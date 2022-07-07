import { meal } from "../App";
import "./Day.css";
import Meal from "./Meal";

const Day = ({
  key,
  name,
  meals,
  onChange,
}: {
  key: string;
  name: string;
  meals: meal[];
  onChange: (newPrice: number) => void;
}) => {
  return (
    <>
      <div className="expense-item">
        <br></br>
        {name}
        <br></br>
      </div>
      <div className="expense-item__description">
        {meals.map((meal) => (
          <Meal
            key={meal.strMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            idMeal={meal.idMeal}
            price={meal.price}
          />
        ))}
      </div>
    </>
  );
};

export default Day;
