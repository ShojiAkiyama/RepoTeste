import User from "../models/User.js"

const saveUser = async (UserModel) => {
    const save = await useReducer.create(UserModel);
    return save;
}

const getUserById = async (UserModel) => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getAllUsers = async (id) => {
    return await User.findByPk(id);
};

const deleteUserById = async (id) => {
    return await User.destroy({where: { id: id}});
};

const updateUserById = async (id, UserModel) => {
    try {
        const result = await User.update(UserModel, {where: { id: id}});
        if (result[0]===1) {
            return { messsage: "user update with success"};
        } else {
            return { message: "could not find ${id} to update", status: 404};
        }
    } catch (error){
        console.error
    }

};

const factory = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default factory;