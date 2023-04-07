const router = require('express').Router(); 

const vitaminRouter = require('./vitamins.js');
const foodRouter = require('./foods.js');

router.use('/vitamins', vitaminRouter); 
router.use('/foods', foodRouter);

module.exports = router;