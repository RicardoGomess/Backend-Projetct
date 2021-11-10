import foodSchema from '../models/food.model.js'

const FoodService = {
    getAllFoods: async () => {
        const foods = await foodSchema.find().all();
        return foods;
    },
    createFood: async (food) => {
        const foodObject = new foodSchema(food);
        const addFood = await foodObject.save();
        if (addFood) return 'food added';
    },
    getFoodById: async (uuid) => {
        const result = await foodSchema.findOne({ _id: uuid });

        const calc = result.protein + result.fat + result.carboHydrates

        return {
            ...result._doc,
            calc
        };
    },
    updateFood: async (requestBody, uuid) => {
        const objectUpdated = await foodSchema.findOneAndUpdate({ _id: uuid }, { ...requestBody })
        return {
            ...requestBody
        }
    },
    deleteFood: async (uuid) => {
        try {
            const deleteFood = await foodSchema.findOneAndDelete({ _id: uuid });
            if (deleteFood) return 'food deleted';
        } catch (error) {
            throw error;
        }

    }
}

export default FoodService;