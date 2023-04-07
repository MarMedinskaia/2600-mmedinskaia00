import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const AllFood = props=>{
    
    
    return (<>
             {props.allFood ? 
              <div id="allfood">
               <h2>Food Rich in Vitamins</h2>
               <ul className='food'>
                 {props.allFood.map((food,index)=><li key={index} className="foodName">
                 {food.name}
                 <ul className="contain">{food.vitamins.map((vitamin,index)=><li key={index}>{vitamin}</li>)}
                 </ul>
                 </li>)}
               </ul>
              </div>
              : <></>
             }
            </>)
}

export default AllFood;