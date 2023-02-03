import React from "react";

function Header() {


    return (
        <div className="header">
            <div className="headerText">
                <h1>Tate Braeckel  <br></br>~ Visual Art ~</h1>
            </div>
            <div >
                <a className="headerImg" href="http://localhost:3000/home" > <img src="../TNTLOGO.png" alt="tntlogo" style={{ width: "100px" }} />
                </a>
            </div>
        </div>
    )
}
export default Header