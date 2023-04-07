import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';


const NewVitamin = props=>{

    return(
        <form onSubmit={event=>props.createVitamin(event)}>
            <h3>Add Vitamin/Mineral Profile</h3>
            <label>
                Vitamin/Mineral name:
                <input type="text" name="name" onChange={event=>props.setName(event)}
                value={props.vitaminName}/>
            </label>
                
            <fieldset>
            <legend>Good for:</legend>
                <label>Hair&nails
                <input type="checkbox" value="hair and nails" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Immune system
                <input type="checkbox" value="immune system" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Brain
                <input type="checkbox" value="brain" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Teeth
                <input type="checkbox" value="teeth" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Bones
                <input type="checkbox" value="bones" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Metabolism
                <input type="checkbox" value="metabolism" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Heart
                <input type="checkbox" value="heart" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                <label>Tissue
                <input type="checkbox" value="tissue" name="goodFor" onChange={event=>props.changeGoodFor(event)}/>
                </label>
                </fieldset>
                
                <label>Contained in the food:
                <input type="text" name="foods" onChange={event=>props.setContained(event)} 
                value={props.containedIn}/>
                </label>
                <button>Submit</button>
           </form>
        )
}

export default NewVitamin;