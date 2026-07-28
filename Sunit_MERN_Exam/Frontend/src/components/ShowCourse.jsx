// Show.JSX
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ShowCourse = () => {
    const [course, setCourse] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/show/${id}`).then((resp) => {
            setCourse(resp.data)
        }).catch((err) => {
            console.log(err);

        });
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/delete/${id}`,course).then((resp) => {
            navigate('/')
        }).catch((err) => {
            console.log(err);

        });
    }
    return (
        <>
            <div
                className="container my-2 py-2 col-4"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div className="col">
                        <div className="card ">
                            <img className="card-img-top" src={course.thumbnail} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{course.courseName}</h4>
                                <p className="card-text">Instructor: {course.instructor}</p>
                                <p className="card-text">Category: {course.category}</p>
                                <p className="card-text">Duration: {course.duration} <small>Hours</small></p>
                                <p className="card-text">Level: {course.level}</p>

                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-secondary me-2"
                                    to="/"
                                    role="button"
                                >Back
                                </NavLink>

                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-warning me-2"
                                    to={`/edit/${id}`}
                                    role="button"

                                >Edit
                                </NavLink>

                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ShowCourse
