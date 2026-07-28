import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = ({ search }) => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
            .then((resp) => {
                setCourse(resp.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleCourse = course.filter((c) =>
        c.courseName.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.level.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row py-5">
                {handleCourse.map((c) => (
                    <div className="col-md-4 mb-3" key={c._id}>
                        <div className="card h-100">

                            <img
                                className="card-img-top"
                                src={c.thumbnail}
                                alt={c.courseName}
                            />

                            <div className="card-body">

                                <h4>{c.courseName}</h4>
                                <h6>Instructor: {c.instructor}</h6>

                                <NavLink
                                    className="btn btn-primary"
                                    to={`/show/${c._id}`}
                                >
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home