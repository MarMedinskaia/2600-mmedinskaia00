const mongoose = require("mongoose");  
// require('dotenv').config();

let mongoDB = `mongodb+srv://margarita:R1M3C2L1@cluster0.hkcfiiw.mongodb.net/vitamins-in-food?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);  