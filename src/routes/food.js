'use strict';

const router = require('express').Router();
const validator = require('../middleware/validator');

const {
  getFood,
  createFood,
  updateFood,
  deleteFood,
} = require('../controllers/food.controller');

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;
