// Edit.JSX
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditCourse = () => {

    const[course,setCourse]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:4000/show/${id}`).then((resp) => {
            setCourse(resp.data)
        }).catch((err) => {
            console.log(err);
            
        });
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:4000/edit/${id}`,course).then((resp) => {
            navigate(`/show/${id}`)
        }).catch((err) => {
            console.log(err);
            
        });
    }

  return (
    <div>
            <div
                className="container col-6 py-5"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div className="col">
                        <div className="card">
                            
                            <div className="card-body text-center">
                                <h4 className="card-title">Edit Course Details</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.courseName}
                                            onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                                        />
                                        <label for="formId1">Course Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.instructor}
                                            onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                                        />
                                        <label for="formId1">Instructor</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.category}
                                            onChange={(e)=>setCourse({...course,category:e.target.value})}
                                        />
                                        <label for="formId1">Category</label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.duration}
                                            onChange={(e)=>setCourse({...course,duration:e.target.value})}
                                        />
                                        <label for="formId1">Duration <small>(In Hours)</small></label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.level}
                                            onChange={(e)=>setCourse({...course,level:e.target.value})}
                                        />
                                        <label for="formId1">Level <small>(Beginner/Intermediate/Advanced)</small></label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={course.thumbnail}
                                            onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                        />
                                        <label for="formId1">Thumbnail URL</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                    >
                                        Edit Course
                                    </button>
                                                                        
                                    
                                    
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
        </div>

        </div>
  )
}

export default EditCourse
