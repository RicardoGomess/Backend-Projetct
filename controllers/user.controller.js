import UserService from '../services/user.service.js' 
/* const UserService = require('../services/user.service.js');
 */

const UserController = {
    getAll: async (req, res) =>{
        const users = await UserService.getAllUsers();
        res.json(users);
    },
    create: async (req, res) => {
        const addUser = await UserService.createUser(req.body);
        res.json({addUser});
    },
    getById: async (req, res) => {
        const id = req.params.id;
        const userById = await UserService.getUserById(id); 
        if(!userById) {
            res.status(404).json({error: 'cannot find by this id'});
        }
        res.json(userById);
    },
    partialUpdate: async (req, res) => {
        const userUpdated = await UserService.updateUser(req.body, req.params.id)
        res.json(userUpdated);
    },
    delete: async (req, res) => {
        const deleteUser = await UserService.deleteUser(req.params.id)
        res.json(deleteUser);
    }
}

export default UserController;