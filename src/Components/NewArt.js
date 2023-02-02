import React, { useState } from "react";

function NewArt({ addNewArt }) {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("");
    const [price, setPrice] = useState(0.00)
    const [image, setImage] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        let newArt = {
            title: title,
            year: year,
            price: price,
            image: image
        }


        fetch(`http://localhost:8000/artwork`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newArt)
        })
            .then((r) => r.json())
            .then(myArt => addNewArt(myArt))
    }


    return (
        <div className="newArtForm" >
            <h2 className="newArtFormH2">New Art</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="New Art Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <input type="text" name="year" placeholder="Year Created" value={year} onChange={(e) => setYear(e.target.value)} />

                <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />

                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />

                <button type="submit">Add Art</button>
            </form>
        </div>
    )
}

export default NewArt;