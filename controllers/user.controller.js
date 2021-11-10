import UserService from '../services/user.service.js'
/* const UserService = require('../services/user.service.js');
 */

const UserController = {
    getAll: async (req, res) => {
        const users = await UserService.getAllUsers();
        res.json(users);
    },
    create: async (req, res, next) => {
        try {
            const addUser = await UserService.createUser(req.body);
            res.json({ addUser });
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const userById = await UserService.getUserById(id);
            res.json(userById);
        } catch (error) {
            next(error);
        }
    },
    partialUpdate: async (req, res) => {
        const userUpdated = await UserService.updateUser(req.body, req.params.id)
        res.json(userUpdated);
    },
    delete: async (req, res, next) => {
        try {
            const deleteUser = await UserService.deleteUser(req.params.id)
            res.json(deleteUser);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;