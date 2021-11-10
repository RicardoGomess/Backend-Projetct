import userSchema from '../models/user.model.js'


const UserService = {
    getAllUsers: async () => {
        const users = await userSchema.find().all();
        return users;
    },
    createUser: async (user) => {
        const userObject = new userSchema(user);
        const addUser = await userObject.save();
        if (addUser) return 'user added';
    },
    getUserById: async (uuid) => {
        return userSchema.findOne({ _id: uuid });
    },
    updateUser: async (requestBody, uuid) => {
        const objectUpdated = await userSchema.findOneAndUpdate({ _id: uuid }, { ...requestBody })
        return {
            ...requestBody
        }
    },
    deleteUser: async (uuid) => {
        const deleteUser = await userSchema.findOneAndDelete({ _id: uuid });
        if (deleteUser) return 'user deleted';
    }
}

export default UserService;

/*module.exports = UserService; */

