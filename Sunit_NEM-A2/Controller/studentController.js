const studentModel = require("../Model/studentModel");

const displayStudent = async (req, resp) => {
    try {
        const result = await studentModel.find()
        resp.render("dashboard", { result, uname: req.session.uname });
    } catch (error) {
        console.log(error);

    }
}

const addForm = (req, resp) => {
    resp.render("students/add")
}

const addStudent = async (req, resp) => {
    try {
        const { name, email, age } = req.body
        await studentModel.create({ name, email, age })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const deleteStudent = async (req, resp) => {
    try {
        await studentModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    try {
        const data = await studentModel.findById(req.params.id)
        resp.render("students/update", { data })
    } catch (error) {
        console.log(error);

    }
}

const updateStudent = async (req, resp) => {
    try {
        const { name, email, age } = req.body
        await studentModel.findByIdAndUpdate(req.params.id, { name, email, age })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

module.exports = { displayStudent, addForm, addStudent, editForm, updateStudent, deleteStudent }