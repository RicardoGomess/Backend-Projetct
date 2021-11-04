import FoodModel from '../models/food.model.js'

const FoodService = {
    getAllFoods: async () => {
        const foods = await FoodModel.find().all();
        return foods;
    },
    createFood: async (food) => {
        const foodObject = new FoodModel(food);
        const result = await foodObject.save();
        if(result) return 'sucesso';
    },
    getFoodById: async (uuid) => {
        const result = await FoodModel.findOne({uuid: uuid});
        return result;
    },
    updateFood: async (requestBody, id) => {
        const objectUpdated = await FoodModel.findOneAndUpdate({uuid: id}, {...requestBody}) 
        return {
            ...requestBody
        }
    },
    deleteFood: async (id) => {
        const result = await FoodModel.findOneAndDelete({uuid: id});
        return result;
    }
}

export default FoodService;