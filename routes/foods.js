const router = require('express').Router({mergeParams:true});

const {getFoods, getFood, postFood} = require('../controllers/foodController.js');

router.get('/', getFoods);
router.get('/:name', getFood);
router.post('/', postFood);


module.exports = router;