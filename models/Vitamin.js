const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const VitaminSchema = new Schema({
    name:{type:String, required:true, maxLength: 40},
    goodFor:[{type:String, required:true}],
    foods: [{type:String, required:false, maxLength: 40}]

});

const Vitamin = mongoose.model('Vitamin', VitaminSchema); //the model to interact with the database

module.exports = {
    Vitamin,
    VitaminSchema
};