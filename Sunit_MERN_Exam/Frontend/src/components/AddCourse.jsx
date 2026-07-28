import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddCourse = () => {
    const [course, setCourse] = useState({ courseName: '', instructor: '', category: '', duration: '', level: '', thumbnail: '' })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/add", course).then((resp) => {
            navigate('/')
        }).catch((err) => {
            console.log(err);

        });
    }

    return (
        <>
            <div
                className="container col-6 py-5"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div className="col">
                        <div className="card">
                            
                            <div className="card-body text-center">
                                <h4 className="card-title">Add Course</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
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
                                            onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                        />
                                        <label for="formId1">Thumbnail URL</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Add Course
                                    </button>
                                                                        
                                    
                                    
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default AddCourse
