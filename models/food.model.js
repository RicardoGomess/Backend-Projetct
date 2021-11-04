import Mongoose from "mongoose";

const Food = Mongoose.model('Food', {
    name: String,
    protein: Number,
    carbonHydrates: Number,
    fat: Number,
    calories: Number,
    uuid: Number,
})

export default Food;