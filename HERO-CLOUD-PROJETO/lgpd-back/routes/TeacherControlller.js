import express from "express";
let router = express.Router();

import teacherService from "../services/TeacherService.js";

router.post("/addTeacher", async function (req, res) {
    const teacherModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function (req, res){
    const allTeachers = await teacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teacher/:id", async function (req, res){
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function (req, res){
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function (req, res) {
    const teacherModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    const teacher = await teacherService.updateTeacherById(req.params.id, teacherModel);
    return res.status(200).json(teacher);
});
    
export default router;