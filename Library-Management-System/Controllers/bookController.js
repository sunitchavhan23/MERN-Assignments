const bookModel = require("../Models/bookModel");

const displayBook=async(req,resp)=>{
    try {
        const result=await bookModel.find()
        resp.render("books/index",{result})
    } catch (error) {
        console.log(error);
        
    }
}

const addForm=(req,resp)=>{
    resp.render("books/add")
}

const addBook=async(req,resp)=>{
    try {
        const {title,author,category,isbn,publicationYear,quantity,availableCopies}=req.body
        await bookModel.create({title,author,category,isbn,publicationYear,quantity,availableCopies})
        resp.redirect("/books")
    } catch (error) {
        console.log(error);
        
    }
}

const deleteBook=async (req,resp)=>{
    try {
        await bookModel.findByIdAndDelete(req.params.id)
        resp.redirect("/books")
    } catch (error) {
        console.log(error);
        
    }
}

const editForm=async(req,resp)=>{
    try {
        const data=await bookModel.findById(req.params.id)
        resp.render("books/edit",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const updateBook=async(req,resp)=>{
    try {
        const {title,author,category,isbn,publicationYear,quantity,availableCopies}=req.body
        await bookModel.findByIdAndUpdate(req.params.id,{title,author,category,isbn,publicationYear,quantity,availableCopies})
        resp.redirect("/books")
    } catch (error) {
        console.log(error);
        
    }
}

const searchBook=async(req,resp)=>{
    try {
        const {title}=req.body
        const result=await bookModel.find({title})
        resp.render("books/index",{result})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={displayBook,addBook,addForm,deleteBook,updateBook,editForm,searchBook}