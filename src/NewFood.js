import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';


const NewFood = props=>{
    

    return(
        <form onSubmit={event=>props.createFood(event)}>
            <h3>Add Food Profile</h3>
            <label>
                Food name:
                <input type="text" name="fName" value={props.foodName}
                onChange={event=>props.setFName(event)}/>
            </label>
                
            <fieldset>
            <legend>Contains vitamins/minerals:</legend>
                {props.allVitamins ?
                <>
                  {props.allVitamins.map((vitamin,index)=><label key={index}>{vitamin.name}<input type="checkbox" value={vitamin.name} 
                  name="contains" onChange={event=>props.changeContains(event)}/>
                  </label>)}
                </>
                :
                <></>
                }
            </fieldset>
            
            <button>Submit</button>
         </form>
        )
}

export default NewFood;