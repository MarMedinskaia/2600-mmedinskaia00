import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

import VitaminInfo from './VitaminInfo';
import AllFood from './AllFood';

const AllVitamins = props=>{

    const [showStatus, setShowStatus] = useState('hidden');
    const [clickedVitamin, setClickedVitamin] = useState({});
        
    const changeStatus = event=>{
 
        if (showStatus =='hidden') {
            setShowStatus('shown');
        } else {
            setShowStatus('hidden');
        }
    } 

    return (<>
              <div id="allvitamins">
               <h2>Vitamins and Minerals</h2>
               <ul className='vitamins'>
                 {props.allVitamins.map((vitamin,index)=><li key={index}>
                  <button onClick={event=>changeStatus(event)}>{vitamin.name}</button>
                  <VitaminInfo clickedVitamin={vitamin} allVitamins={props.allVitamins} showStatus={showStatus}/>
                  </li>)}
               </ul>
              </div>
             
            </>)
}

export default AllVitamins;