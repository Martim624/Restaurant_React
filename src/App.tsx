import React, { useState } from "react";
import "./App.css";
import Meals from "./components/Day";
import Search from "./components/Search";

export interface meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  price: number;
}

export interface day {
  name: string;
  meals: meal[];
}

const daysArray: day[] = [
  {
    name: "Monday",
    meals: [
      {
        strMeal: "Baked salmon with fennel & tomatoes",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1548772327.jpg",
        idMeal: "52959",
        price: 5,
      },
      {
        strMeal: "Cajun spiced fish tacos",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: "52819",
        price: 7,
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: "52944",
        price: 6,
      },
      {
        strMeal: "Fish fofos",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        idMeal: "53043",
        price: 7,
      },
      {
        strMeal: "Fish pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        idMeal: "52802",
        price: 13,
      },
    ],
  },

  {
    name: "Tuesday",
    meals: [
      {
        strMeal: "Fish Stew with Rouille",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
        idMeal: "52918",
        price: 7,
      },
      {
        strMeal: "Garides Saganaki",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
        idMeal: "52764",
        price: 10,
      },
      {
        strMeal: "Grilled Portuguese sardines",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
        idMeal: "53041",
        price: 12,
      },
      {
        strMeal: "Honey Teriyaki Salmon",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
        idMeal: "52773",
        price: 11,
      },
      {
        strMeal: "Kedgeree",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
        idMeal: "52887",
        price: 9,
      },
    ],
  },

  {
    name: "Wednesday",
    meals: [
      {
        strMeal: "Kung Po Prawns",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1525873040.jpg",
        idMeal: "52946",
        price: 4,
      },
      {
        strMeal: "Laksa King Prawn Noodles",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
        idMeal: "52821",
        price: 10,
      },
      {
        strMeal: "Mediterranean Pasta Salad",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        idMeal: "52777",
        price: 7,
      },
      {
        strMeal: "Mee goreng mamak",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
        idMeal: "53048",
        price: 14,
      },
      {
        strMeal: "Nasi lemak",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
        idMeal: "53051",
        price: 7,
      },
    ],
  },

  {
    name: "Thursday",
    meals: [
      {
        strMeal: "Portuguese fish stew (Caldeirada de peixe)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
        idMeal: "53045",
        price: 10,
      },
      {
        strMeal: "Recheado Masala Fish",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
        idMeal: "52809",
        price: 5,
      },
      {
        strMeal: "Salmon Avocado Salad",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1549542994.jpg",
        idMeal: "52960",
        price: 9,
      },
      {
        strMeal: "Salmon Prawn Risotto",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
        idMeal: "52823",
        price: 6,
      },
      {
        strMeal: "Saltfish and Ackee",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
        idMeal: "52936",
        price: 12,
      },
    ],
  },

  {
    name: "Friday",
    meals: [
      {
        strMeal: "Seafood fideu",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
        idMeal: "52836",
        price: 12,
      },
      {
        strMeal: "Shrimp Chow Fun",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1529445434.jpg",
        idMeal: "52953",
        price: 6,
      },
      {
        strMeal: "Sledz w Oleju (Polish Herrings)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
        idMeal: "53023",
        price: 12,
      },
      {
        strMeal: "Spring onion and prawn empanadas",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
        idMeal: "53040",
        price: 8,
      },
      {
        strMeal: "Three Fish Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
        idMeal: "52882",
        price: 15,
      },
    ],
  },
];

export const checked: string[] = [];

export const checkChecked = (value: string, isChecked: boolean) => {
  if (isChecked) {
    checked.push(value);
  } else {
    checked.filter((a) => a !== value);
  }
};

function App() {
  const [daysData, setDaysData] = useState(daysArray);
  const [price, setPrice] = useState(0);

  const update = (newPrice: number) => {
    setPrice((price) => price + newPrice);
  };

  const search = (text: string) => {
    if (text) {
      setDaysData(
        daysArray.map((day) => {
          const filteredMeals = day.meals.filter((meal) => {
            return meal.strMeal.toLowerCase().startsWith(text.toLowerCase());
          });
          return { name: day.name, meals: filteredMeals };
        })
      );
      return;
    }
    setDaysData(daysArray);
  };

  return (
    <>
      <div className="expenses">
        <h1>React Search</h1>
        <div className="search">
          <Search onSearch={search} />
        </div>
        <div className="expenses-item">
          {daysData.map((day) => (
            <Meals
              key={day.name}
              name={day.name}
              meals={day.meals}
              onChange={update}
            />
          ))}
        </div>
        <br></br>
        <div className="expense-item-price">Total Price: {price} $</div>
      </div>
    </>
  );
}

export default App;
