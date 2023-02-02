import React from "react";


function About() {
    return (
        <div className="aboutContainer">
            <div className="meImage">
                <img
                    src={"http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/published/5b37fdd8-7151-4b94-b5e7-f88e92e4c2bb.jpg?1675207804"} alt="tate "
                    style={{ width: "400px" }}

                />
            </div>
            <div className="aboutTextBox">
                <h1><u>ABOUT THE ARTIST</u></h1>
                <h2>Tate Braeckel has been a visual artist for as long as he can remember.<br></br><br></br><br></br>

                    He has worked in every medium of art, but has focused much of his<br></br> energy into realistic pencil drawings, large-scale paintings, <br></br>and 3D scultping of any type. <br></br><br></br><br></br>He has also delved into digital arts through illustration, <br></br>product design, and social media/ marketing.

                </h2>
                <br></br>
                <img src="/LOGO.ico" alt="tntlogo" style={{ width: "100px" }} />
            </div>

        </div>
    )
}
export default About;