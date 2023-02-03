import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {


    return (

        <div className="navbar">
            <NavLink
                to="/home"
                exact
                style={{ marginRight: "100px", fontSize: "30px", color: "#f3a84c" }}

                activeStyle={{
                    background: "black",
                    color: "#F2A68D",
                    borderRadius: "5px",
                    padding: "3px"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={{ marginRight: "100px", fontSize: "30px", color: "#f3a84c" }}

                activeStyle={{
                    background: "black",
                    color: "#F2A68D",
                    borderRadius: "5px",
                    padding: "3px"

                }}
            >
                About
            </NavLink>
            <NavLink
                to="/artwork"
                exact
                style={{ marginRight: "100px", fontSize: "30px", color: "#f3a84c    " }}

                activeStyle={{
                    background: "black",
                    color: "#F2A68D",
                    borderRadius: "5px",
                    padding: "3px"

                }}
            >
                Artwork
            </NavLink>
        </div>
    )
}

export default NavBar;