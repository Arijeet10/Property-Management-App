import React, { useState } from "react";

function Add() {

    const [propData, setPropData] = useState({
        fullName: "",
        desc: "",
        size: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setPropData(
            prevData => {
                return { ...prevData, [name]: value }
            }
        )
    }

    return (
        <div>
            <form>
                <input type="text" name="fullName" value={propData.fullName} placeholder="Enter full name" onChange={handleChange} />
                <input type="text" name="desc" value={propData.desc} placeholder="Enter Description" onChange={handleChange} />
                <input type="text" name="size" value={propData.size} placeholder="Enter size" onChange={handleChange} />
                <button type="submit">Add Property</button>
            </form>
        </div>
    )
}

export default Add;