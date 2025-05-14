import Teacher from "../models/Teacher.js"

const saveTeacher = async (TeacherModel) => {
    const save = await Teachereducer.create(TeacherModel);
    return save;
}

const getTeacherById = async (TeacherModel) => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getAllTeachers = async (id) => {
    return await Teacher.findByPk(id);
};

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({where: { id: id}});
};

const updateTeacherById = async (id, TeacherModel) => {
    try {
        const result = await Teacher.update(TeacherModel, {where: { id: id}});
        if (result[0]===1) {
            return { messsage: "Teacher update with success"};
        } else {
            return { message: "could not find ${id} to update", status: 404};
        }
    } catch (error){
        console.error
    }

};

const factory = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default factory;