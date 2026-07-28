import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        image: "",
        author: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/blog/add", blog)
            .then((resp) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div class="container py-3 my-3 text-center col-6">
                <div class="row justify-content-center align-items-center g-2">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Add Blogs Here !</h4>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e) =>setBlog({ ...blog, title: e.target.value })}
                                        />
                                        <label for="formId1">Title</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e) =>setBlog({ ...blog, content: e.target.value })}
                                        />
                                        <label for="formId1">Content</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e) =>setBlog({ ...blog, image: e.target.value })}
                                        />
                                        <label for="formId1">Image URL</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e) =>setBlog({ ...blog, author: e.target.value })}
                                        />
                                        <label for="formId1">Author</label>
                                    </div>

                                    <button type="submit" class="btn btn-primary">
                                        Add Blog
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
