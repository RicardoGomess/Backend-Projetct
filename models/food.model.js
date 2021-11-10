import Mongoose from "mongoose";

const foodSchema = Mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  protein: {
    type: Number,
    required: [true, 'Please add a protein value']
  },
  carboHydrates: {
    type: Number,
    required: [true, 'Please add a carbohydrates value']
  },
  carboHydrates: {
    type: Number,
    required: [true, 'Please add a carbohydrates value']
  },
  fats: {
    type: Number,
    required: [true, 'Please add a fats value']
  },
  calories: {
    type: Number,
    required: [true, 'Please add a calories value']
  },

})


export default Mongoose.model('Food', foodSchema);