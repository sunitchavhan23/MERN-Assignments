const empModel = require("../Model/empModel");

const displayEmp = async (req, resp) => {
    try {
        const result = await empModel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const addEmp = async (req, resp) => {
    try {
        const data = new empModel({
            name: req.body.name,
            salary: req.body.salary,
            dept: req.body.dept,
            address: req.body.address
        })
        const result = await data.save()
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const updateEmp = async (req, resp) => {
    try {
        const result = await empModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const deleteEmp = async (req, resp) => {
    try {
        const result = await empModel.findByIdAndDelete(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const searchEmp = async (req, resp) => {
    try {
        const result = await empModel.findById(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

module.exports = { displayEmp, addEmp, updateEmp, deleteEmp, searchEmp }