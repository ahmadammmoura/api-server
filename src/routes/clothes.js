'use strict';

const router = require('express').Router();
const validator = require('../middleware/validator');

const {
  getClothes,
  createClothes,
  updateClothes,
  deleteClothes,
} = require('../controllers/clothes.controller');

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

module.exports = router;
