const hotelModel = require("../Model/hotelModel");



const displayRoom = async (req, resp) => {
    try {
        const result = await hotelModel.find().populate("userId");
        resp.render("dashboard", {email: req.session.email,userId: req.session.userId,result})
    } catch (error) {
        console.log(error);

    }
}

const addForm = (req, resp) => {
    resp.render("add")
}

const addRoom = async (req, resp) => {
    try {
        const { rnum,image,rtype,price,capacity} = req.body
        await hotelModel.create({ rnum,image,rtype,price,capacity, userId: req.session.userId })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const deleteRoom = async (req, resp) => {
    try {
        const hotel = await hotelModel.findById(req.params.id);
        if (!hotel) {
            return resp.send("Room not found");
        }

        if (hotel.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }
        await hotelModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    try {
        const hotel = await hotelModel.findById(req.params.id);
        if (!hotel) {
            return resp.send("Room not found");
        }

        if (hotel.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }

        resp.render("edit", { data: hotel });
    } catch (error) {
        console.log(error);

    }
}

const updateRoom = async (req, resp) => {
    try {
        const hotel = await hotelModel.findById(req.params.id);
        if (!hotel) {
            return resp.send("Room not found");
        }

        if (hotel.userId.toString() !== req.session.userId) {
            return resp.send("Unauthorized");
        }

        const { rnum,image,rtype,price,capacity } = req.body
        await hotelModel.findByIdAndUpdate(req.params.id, { rnum,image,rtype,price,capacity })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

module.exports={displayRoom,addForm,addRoom,deleteRoom,editForm,updateRoom}