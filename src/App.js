import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

import NewVitamin from './NewVitamin';
import NewFood from './NewFood';
import AllVitamins from './AllVitamins';
import VitaminInfo from './VitaminInfo';
import AllFood from './AllFood';

const App = props=>{
    
    const [allVitamins, setAllVitamins] = useState([]);
    const [vitaminName, setVitaminName] = useState('');
    const setName = (event)=>{
        setVitaminName(event.target.value);
    }
        
    const [containedIn, setContainedIn] = useState([]);
    const setContained = (event)=>{
        setContainedIn(event.target.value);
    }
    const [goodFor, setGoodFor] = useState([]);
    
    const changeGoodFor = (event)=>{
        if (event.target.checked) {
            setGoodFor(goodFor.concat(event.target.value));
        } else {
            setGoodFor(goodFor.filter(good=> good != event.target.value));
        }
    }
    
    const createVitamin = (event)=>{
        event.preventDefault();

        let vitamin = {
            name: vitaminName,
            goodFor: goodFor, 
            foods: containedIn
        };
    
        axios.post('/vitamins/api/v1', vitamin)
        .then(result=>{
            console.log(result.data," 1");
            setAllVitamins(allVitamins.concat(result.data));
        })
        .catch(error=>console.log(error));
        }
        
        // for Food:
        const [allFood, setAllFood] = useState([]);
        
        const createFood = (event)=>{
            event.preventDefault();
    
            let food = {
                name: foodName,
                vitamins: contains
            };
        
        axios.post('/foods/api/v1', food)
        .then(result=>{
            setAllFood(allFood.concat(result.data));
        })
        .catch(error=>console.log(error));
        }
        
        const [foodName, setFoodName] = useState('');
        const setFName = (event)=>{
            setFoodName(event.target.value);
        }
        
        const [contains, setContains] = useState([]);
        const changeContains = (event)=>{
            if (event.target.checked) {
                setContains(contains.concat(event.target.value));
            } else {
                setContains(contains.filter(vit=> vit != event.target.value));
            }
        }
    
        
        
         return (
         <div id="wrapper">
           <h1>Vitamins and Minerals in Food</h1>
           <div id="forms">
             <NewVitamin allVitamins={allVitamins} setName={setName} vitaminName={vitaminName} 
              changeGoodFor={changeGoodFor} goodFor={goodFor} setContained={setContained} containedIn={containedIn} createVitamin={createVitamin}/>
             <NewFood allVitamins={allVitamins} setFName={setFName} foodName={foodName} changeContains={changeContains} contains={contains} createFood={createFood}/>
           </div>
             <AllVitamins allVitamins={allVitamins} allFood={allFood}/>
             <AllFood allVitamins={allVitamins} allFood={allFood} setAllFood={setAllFood}/>
         </div>
        );
}

export default App;
