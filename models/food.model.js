import Mongoose from "mongoose";

const foodSchema = Mongoose.Schema ({
    name: String,
    protein: Number,
    carboHydrates: Number,
    fat: Number,
    calories: Number,
    uuid: Number,
})

/* export default Food; */
export default Mongoose.model('foodSchema', foodSchema) ;