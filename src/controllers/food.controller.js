'use strict';

const InterFace = require('../Models/Interface.modle');
const FoodModel = require('../Models/Food.modle');
const food = new InterFace(FoodModel);
const modelName = 'food';
const getFood = async (req, res, next) => {
  const id = req.params.id;
  const data = await food.read(modelName,id);

  res.json(data);
};
const createFood = async (req, res, next) => {
  try {
    const data = req.body;

    const newPerson = await food.create(modelName, data);
    res.json(newPerson);
  } catch (e) {
    next(e);
  }
};
const updateFood = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obj = req.body;

    const doc = await food.update(modelName, id, obj);

    console.log(id, obj, doc);
    res.json(doc);
  } catch (err) {
    next(err);
  }
};
const deleteFood = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deleteFood = await food.delete(modelName, id);

    res.json(deleteFood);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFood,
  createFood,
  updateFood,
  deleteFood,
};
