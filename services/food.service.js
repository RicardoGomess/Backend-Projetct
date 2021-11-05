import foodSchema from '../models/food.model.js'

const FoodService = {
    getAllFoods: async () => {
        const foods = await foodSchema.find().all();
        return foods;
    },
    createFood: async (food) => {
        const foodObject = new foodSchema(food);
        const result = await foodObject.save();
        if(result) return 'success';
    },
    getFoodById: async (uuid) => {
        const result = await foodSchema.findOne({uuid: uuid});
        return result;
    },
    updateFood: async (requestBody, id) => {
        const objectUpdated = await foodSchema.findOneAndUpdate({uuid: id}, {...requestBody}) 
        return {
            ...requestBody
        }
    },
    deleteFood: async (id) => {
        const result = await foodSchema.findOneAndDelete({uuid: id});
        return result;
    }
}

export default FoodService;