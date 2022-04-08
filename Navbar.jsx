import React from "react";
import {  Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <NavLink class="navbar-brand" to="/">Employee List</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>    
                        </ul>
                       
                    </div>
                    <Link className="btn-secondary btn-lg" style={{ marginRight: "10px", padding: "7px 10px", textDecoration: "none", borderRadius:"5px"}} to="/users/add">Add User</Link>
                </div>
            </nav>


        </>
    )
}


export default Navbar;