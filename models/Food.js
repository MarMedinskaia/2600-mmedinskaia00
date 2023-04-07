const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { VitaminSchema } = require("./Vitamin");

const FoodSchema = new Schema({
    name:{type:String, required:true, maxLength: 40},
    vitamins:[{type:String, required:true}]
    
});

const Food = mongoose.model('Food', FoodSchema); 

module.exports = {
    Food,
    FoodSchema
};