import React from 'react';
import './Meals.css'
const Meals = (props) => {
    const {strCategory,strMeal,strMealThumb}=props.meal
    return (
        <div className='grid'>
           <div className="shop-container">
               <div>
               <img src={strMealThumb} alt="" />
            <div className='menu'>
            <h1>strMeal:{strMeal}</h1>
        <h3>strCategory:{strCategory}</h3>
        <button>ADD</button>
        <button>Remove</button>
        </div>
           </div>
               </div>
           
           <div className="add-container">
<h1>hello</h1>
           </div>
        </div>
    );
};

export default Meals;