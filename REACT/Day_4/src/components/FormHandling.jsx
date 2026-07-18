import React, { useState } from 'react'

const FormHandling = () => {
    const [user, setUser] = useState({ uname: '', upass: '' })

    const handleClick = (e) => {
        e.preventDefault()
        alert(`Welcome....${user.uname}`)
    }

    return (
        <div
            class="container col-5"
        >
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col">
                    <div class="card">

                        <div class="card-body">
                            <h4 class="card-title">Login</h4>
                            <form onSubmit={handleClick}>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e) => setUser({ ...user, uname: e.target.value })}
                                    />
                                    <label for="formId1">Username</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e) => setUser({ ...user, upass: e.target.value })}
                                    />
                                    <label for="formId1">Password</label>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default FormHandling


