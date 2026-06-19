const productModel = require("../Model/productModel");

const createProduct = async (req, resp) => {
    try {
        const data = new productModel({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity
        })
        const result = await data.save()
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const updateProduct = async (req, resp) => {
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
}

const deleteProduct=async(req,resp)=>{
    try {
        const result=await productModel.findByIdAndDelete(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
}

const showProduct=async(req,resp)=>{
    try {
        const result = await productModel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={createProduct,updateProduct,deleteProduct,showProduct}