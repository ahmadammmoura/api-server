const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
  name:{
    type:String,
    trim:true,
  },
  type:{
    type:String,
    trim:true,
  },
});

const ClothesModel = mongoose.model('clothes',clothesSchema);


module.exports = ClothesModel;