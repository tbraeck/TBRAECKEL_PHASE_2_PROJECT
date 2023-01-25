import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {



    return (

        <div className="navbar">
            <NavLink
                to="/"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                About
            </NavLink>
            <NavLink
                to="/movies"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Movies List
            </NavLink>
            <NavLink
                to="/movies"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Search Movies
            </NavLink>

        </div>
    )
}

export default NavBar;