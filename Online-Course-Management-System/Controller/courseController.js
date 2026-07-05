const courseModel = require("../Model/courseModel");

const displayCourse = async (req, resp) => {
    try {
        const result = await courseModel.find()
        resp.render("dashboard", {uname: req.session.uname,userId: req.session.userId,result})
    } catch (error) {
        console.log(error);

    }
}

const addForm = (req, resp) => {
    resp.render("add", {
        uname: req.session.uname
    })
}

const addCourse = async (req, resp) => {
    try {
        const { cname, tname, duration, fees } = req.body
        await courseModel.create({ cname, tname, duration, fees, userId: req.session.userId })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const deleteCourse = async (req, resp) => {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) {
            return resp.send("Course not found");
        }

        if (course.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }
        await courseModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) {
            return resp.send("Course not found");
        }

        if (course.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }

        resp.render("edit", { data: course });
    } catch (error) {
        console.log(error);

    }
}

const updateCourse = async (req, resp) => {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) {
            return resp.send("Course not found");
        }

        if (course.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }

        const { cname, tname, duration, fees } = req.body
        await courseModel.findByIdAndUpdate(req.params.id, { cname, tname, duration, fees })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

module.exports = { displayCourse, addForm, addCourse, deleteCourse, editForm, updateCourse }