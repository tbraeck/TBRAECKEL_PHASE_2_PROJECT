import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {



    return (

        <div className="navbar">
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
                to="/genres"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Genres
            </NavLink>
            <NavLink
                to="/movies"
                exact
                // style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Movies
            </NavLink>

        </div>
    )
}

export default NavBar;