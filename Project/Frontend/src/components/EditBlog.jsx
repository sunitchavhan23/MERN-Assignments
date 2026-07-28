import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/blog/${id}`)
            .then((resp) => {
                setBlog(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:4000/blog/blog/${id}`, blog)
            .then((resp) => {
                navigate(`/${id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div className="container my-2 py-2 col-6">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edit Blog Here</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.title}
                                            onChange={(e) =>
                                                setBlog({ ...blog, title: e.target.value })
                                            }
                                        />
                                        <label for="formId1">Title</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.content}
                                            onChange={(e) =>
                                                setBlog({ ...blog, content: e.target.value })
                                            }
                                        />
                                        <label for="formId1">Content</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.image}
                                            onChange={(e) =>
                                                setBlog({ ...blog, image: e.target.value })
                                            }
                                        />
                                        <label for="formId1">Image URL</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.author}
                                            onChange={(e) =>
                                                setBlog({ ...blog, author: e.target.value })
                                            }
                                        />
                                        <label for="formId1">Author</label>
                                    </div>

                                    <NavLink
                                        name=""
                                        id=""
                                        className="btn btn-secondary me-3"
                                        role="button"
                                        to={`/${id}`}
                                    >
                                        Back
                                    </NavLink>

                                    <button type="submit" className="btn btn-primary">
                                        Edit
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

export default EditBlog;
