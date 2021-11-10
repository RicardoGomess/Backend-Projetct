import express from 'express';
import foodRoutes from './routes/food.route.js';
import userRoutes from './routes/user.route.js';
import authenticationRoutes from './routes/authentication.js';
import Mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.js';


dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/foods', foodRoutes);
app.use('/users', userRoutes);
app.use('/authentication', authenticationRoutes);

app.use(errorHandler);


Mongoose.connect('mongodb://localhost:27021/fitness-db', (err, client) => {
    if (err) {
        throw new Error('Could not connect to the database');
    }
    console.log('Successfully connected to the database');
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});