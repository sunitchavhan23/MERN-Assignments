const memberModel = require("../Models/memberModel");

const displayMember = async (req, resp) => {
    try {
        const result = await memberModel.find()
        resp.render("members/index", { result })
    } catch (error) {
        console.log(error);

    }
}

const addForm = (req, resp) => {
    resp.render("members/add")
}

const addMember = async (req, resp) => {
    try {
        const { name, email, mobile, address, membershipDate } = req.body
        await memberModel.create({ name, email, mobile, address, membershipDate })
        resp.redirect("/members")
    } catch (error) {
        console.log(error);

    }
}

const deleteMember = async (req, resp) => {
    try {
        await memberModel.findByIdAndDelete(req.params.id)
        resp.redirect("/members")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    try {
        const data = await memberModel.findById(req.params.id)
        resp.render("members/edit", { data })
    } catch (error) {
        console.log(error);

    }
}

const updateMember = async (req, resp) => {
    try {
        const {name,email,mobile,address,membershipDate} = req.body
        await memberModel.findByIdAndUpdate(req.params.id, {name,email,mobile,address,membershipDate})
        resp.redirect("/members")
    } catch (error) {
        console.log(error);

    }
}

const searchMember = async (req, resp) => {
    try {
        const { name } = req.body
        const result = await memberModel.find({ name })
        resp.render("members/index", { result })
    } catch (error) {
        console.log(error);

    }
}

module.exports={displayMember,addForm,addMember,editForm,deleteMember,updateMember,searchMember}