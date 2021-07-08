'use strict';

const InterFace = require('../Models/Interface.modle');
const ClothesModal = require('../Models/Clothes.modle');
const clothes = new InterFace(ClothesModal);
const modelName = 'clothes';

const getClothes = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await clothes.read(modelName,id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
const createClothes = async (req, res, next) => {
  try {
    const data = req.body;

    const newClothes = await clothes.create(modelName,data);
    res.json(newClothes);
  } catch (err) {
    next(err);
  }
};
const updateClothes = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obj = req.body;

    const doc = await clothes.update(modelName,id, obj);

    console.log(id, obj, doc);
    res.json(doc);
  } catch (err) {
    next(err);
  }
};
const deleteClothes = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteFood = await clothes.delete(modelName,id);

    res.json(deleteFood);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getClothes,
  createClothes,
  updateClothes,
  deleteClothes,
};
