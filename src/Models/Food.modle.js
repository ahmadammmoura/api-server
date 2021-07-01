const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  name:{
    type:String,
    trim:true,
  },
  type:{
    type:String,
    trim:true,
  },
});

const FoodModel = mongoose.model('food',foodSchema);

module.exports = FoodModel;
