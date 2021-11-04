import FoodService from '../services/food.service.js'


const FoodController = {
    getAll: async (req, res) =>{
        const foods = await FoodService.getAllFoods();
        res.json(foods);
    },
    create: async (req, res) => {
        const result = await FoodService.createFood(req.body);
        res.json({result});
    },
    getById: async (req, res) => {
        const id = req.params.id;
        const foodById = await FoodService.getFoodById(id); 
        if(!foodById) {
            res.status(404).json({error: 'cannot find by this id'});
        }
        res.json(foodById);
    },
    partialUpdate: async (req, res) => {
        const foodUpdated = await FoodService.updateFood(req.body, req.params.id)
        res.json(foodUpdated)
    },
    delete: async (req, res) => {
        const result = await FoodService.deleteFood(req.params.id)
        res.json(result);
    }
} 

export default FoodController;
