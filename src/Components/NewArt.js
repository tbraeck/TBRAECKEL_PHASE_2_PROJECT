import React, { useState } from "react";


function NewArt({ addNewArt }) {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("");
    const [price, setPrice] = useState(0.00)
    const [newImage, setNewImage] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        let newArt = {
            title: title,
            year: year,
            price: price,
            imageUrl: newImage
        }


        fetch(`http://localhost:8000/artwork`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newArt)
        })
            .then((r) => r.json())
            .then((myArt) => addNewArt(myArt))
    }


    return (
        <div className="newArtForm" >
            <div className="h2Wrapper">
                <h2 className="newArtFormH2">  Add New Art Here  </h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="formTitle" type="text" name="title" placeholder="New Art Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <input className="formYear" type="text" name="year" placeholder="Year Created" value={year} onChange={(e) => setYear(e.target.value)} />

                <input className="formPrice" type="number" name="price" step="0.1" placeholder="Price in $..." value={price} onChange={(e) => setPrice(e.target.value)} />

                <input className="formImage" type="text" name="image" placeholder="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} />


                <button className="formButton" type="submit">Add Art</button>
            </form>
        </div>
    )
}

export default NewArt;