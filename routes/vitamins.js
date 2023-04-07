const router = require('express').Router({mergeParams:true});

const {postVitamin, getVitamin, getVitamins} = require('../controllers/vitaminController.js');
router.post('/', postVitamin);
router.get('/:name', getVitamin);
router.get('/', getVitamins);

module.exports = router;