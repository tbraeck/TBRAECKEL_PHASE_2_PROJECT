import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {


    return (

        <div className="navbar">
            <NavLink
                to="/"
                exact
                style={{ marginRight: "40px", fontSize: "30px", color: "#D2AE90" }}

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
                style={{ marginRight: "40px", fontSize: "30px", color: "#D2AE90" }}

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
                style={{ marginRight: "40px", fontSize: "30px", color: "#D2AE90" }}

                activeStyle={{
                    background: "black",
                    color: "#F2A68D",
                    borderRadius: "5px",
                    padding: "3px"

                }}
            >
                Artwork
            </NavLink>
            <NavLink
                to="/search"
                exact
                style={{ marginRight: "40px", fontSize: "30px", color: "#D2AE90" }}

                activeStyle={{
                    background: "black",
                    color: "#F2A68D",
                    borderRadius: "5px",
                    padding: "3px"

                }}
            >
                Search
            </NavLink>


        </div>
    )
}

export default NavBar;