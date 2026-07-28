import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/blog")
            .then((resp) => setBlogs(resp.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="container py-3">
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-md-4 mb-3" key={blog._id}>
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    src={blog.image}
                                    alt={blog.title}
                                />
                                <div className="card-body">
                                    <h4>{blog.title}</h4>
                                    <p>{blog.content}</p>

                                    <NavLink className="btn btn-primary" to={`/${blog._id}`}>
                                        Read More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
