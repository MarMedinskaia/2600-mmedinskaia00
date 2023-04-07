import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const VitaminInfo = props=>{
    const [vitamin, setVitamin] = useState({});
    
    
    return (
        <>
        { props.showStatus=='shown' ?
        <div className="info">
            <p>Good for <b>{props.clickedVitamin.goodFor.join(', ')}</b></p>
            <p>Contained in the food:</p>
            <ul>{props.clickedVitamin.foods.map((food,index)=>
            <li key={index}>{food}</li>)}</ul>
        </div>
        :
        <></>
        }
        </>
        )
}

export default VitaminInfo;