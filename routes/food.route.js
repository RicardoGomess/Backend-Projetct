import express from 'express';

import FoodController  from '../controllers/food.controller.js';


const router = express.Router();

router.get('/', FoodController.getAll);
router.get('/:id', FoodController.getById)

router.post('/', FoodController.create)

router.patch('/:id', FoodController.partialUpdate)

router.delete('/:id', FoodController.delete)

export default router;