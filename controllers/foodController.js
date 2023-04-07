const Food = require('../models/Food.js');

console.log(Food.Food);

const postFood = (req,res)=>{
    
            let food = new Food.Food({
                name: req.body.name,
                vitamins: req.body.vitamins
            });
            food.save()
            .then(result=>{
                console.log(result);
                res.json(result);
                console.log("food saved!");
            })
            .catch(error=>res.status(500).send(error));
            
};


const getFoods = (req,res)=>{
    
        Food.find({}).exec()
        .then(results=>{
            res.status(201).json(results.data);
        })
        .catch(error=>res.status(500).send(error));
};

const getFood = (req,res)=>{
    Food.findOne({'name':req.params.name}).exec()
    .then(results=>{
        res.status(201).json(results.data);
    })
    .catch(error=>res.status(500).json(error));
};


module.exports = {
    postFood,
    getFood,
    getFoods
}