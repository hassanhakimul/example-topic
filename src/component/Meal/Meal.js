import React, { useEffect, useState } from 'react';

import Meals from '../Meals/Meals';
import './Meal.css'

const Meal = () => {
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    return (
        <div>
         
           <div >
           {
             meals.map(meal =><Meals key={meal.idMeal} meal={meal}></Meals>)
         }
           </div>
        </div>
    );
};

export default Meal;