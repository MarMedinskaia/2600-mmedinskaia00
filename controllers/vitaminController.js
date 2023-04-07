const Vitamin = require('../models/Vitamin.js');
// const Food = require('../models/Food.js');
console.log(Vitamin.Vitamin);

const postVitamin = (req,res)=>{

            let vitamin = new Vitamin.Vitamin({
                name: req.body.name,
                goodFor: req.body.goodFor,
                foods: req.body.foods           
            });
            vitamin.save()
            .then(result=>{
                console.log(result)
                res.json(result);
                console.log("saved!");
            })
            .catch(error=>res.status(500).send(error));
   
            console.log("Here!");
            
}


const getVitamins = (req,res)=>{

        Vitamin.Vitamin.find({}).exec()
        .then(results=>{
            res.status(201).json(results);
        })
        .catch(error=>res.status(500).send(error));
};

const getVitamin = (req,res)=>{
    Vitamin.Vitamin.findOne({'name':req.params.name}).exec()
    .then(results=>{
        res.status(201).json(results);
    })
    .catch(error=>res.status(500).json(error));
};

module.exports = {
    postVitamin,
    getVitamin,
    getVitamins
}