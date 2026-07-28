const courseModel = require("../Model/courseModel")

const displayFun = async (req, resp) => {
    const result = await courseModel.find()
    if (result != null) {
        resp.status(200).json(result)
    } else {
        resp.status(404).json({ message: 'Course Not Found' })
    }
}

const showFun = async (req, resp) => {
    const result = await courseModel.findById(req.params.id)
    if (result != null) {
        resp.status(200).json(result)
    } else {
        resp.status(404).json({ message: 'Course Not Found' })
    }
}

const addFun = async (req, resp) => {
    const new_course = new courseModel(req.body)
    const result = await new_course.save()
    resp.status(200).json(result)
}

const updateFun = async (req, resp) => {
    const result = await courseModel.findByIdAndUpdate(req.params.id, req.body)
    if (result != null) {
        resp.status(200).json({ message: 'Course Updated Successfully' })
    } else {
        resp.status(404).json({ message: 'Course Not Found' })
    }
}

const deleteFun = async (req, resp) => {
    const result = await courseModel.findByIdAndDelete(req.params.id)
    if (result != null) {
        resp.status(200).json({ message: 'Course Deleted Successfully' })
    } else {
        resp.status(404).json({ message: 'Course Not Found' })
    }
}

module.exports = { displayFun, showFun, addFun, updateFun, deleteFun }