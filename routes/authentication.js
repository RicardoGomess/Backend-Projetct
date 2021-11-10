import express from 'express';
import { getMe, login, logout } from '../controllers/authentication.js';
import { protect } from '../middlewares/authentication.js';


const router = express.Router();


router.post('/login', login);

router.get('/me', protect, getMe);

router.get('/logout', logout)

export default router;