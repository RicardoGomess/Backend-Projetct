import userSchema from '../models/user.model.js' 
/* const userSchema = require('./models/user.model.js'); */


const UserService = {
    getAllUsers: async () => {
        const users = await userSchema.find().all();
        return users;
    },
    createUser: async (user) => {
        const userObject = new userSchema(user);
        const addUser = await userObject.save();
        if(addUser) return 'success';
    },
    getUserById: async (uuid) => {
        const userById = await userSchema.findOne({uuid: uuid});
        return userById;
    },
    updateUser: async (requestBody, id) => {
        const objectUpdated = await userSchema.findOneAndUpdate({uuid: id}, {...requestBody}) 
        return {
            ...requestBody
        }
    },
    deleteUser: async (id) => {
        const deleteUser = await userSchema.findOneAndDelete({uuid: id});
        if(deleteUser) return 'user';
    }
}

export default UserService;  

/*module.exports = UserService; */

