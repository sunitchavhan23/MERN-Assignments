import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ search, setSearch }) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    Course Manager App
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">
                                Add Course
                            </NavLink>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </form>

                </div>

            </div>
        </nav>
    )
}

export default Navbar