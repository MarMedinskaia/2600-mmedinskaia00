const express = require("express");
const app = express();

const connection = require('./connection.js');
const { Vitamin } = require('./models/Vitamin');
const { Food } = require('./models/Food');

connection
.then(()=>{
    console.log("Connection established");
    const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening"));
});    

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));  
app.use(express.json());

const router = require('./routes/index.js'); 
app.use('/api/v1', router); 
