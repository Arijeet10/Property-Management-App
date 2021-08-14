import React from "react";

function Home(props) {

    function handleDelete() {
        props.deleteProp(props.id)
    }

    return (
        <div>
            <ul>
                <li>{props.propName}</li>
                <li>{props.desc}</li>
                <li>{props.size}</li>
                <button type="submit" onClick={handleDelete}>Delete</button>
            </ul>
        </div>
    )
}

export default Home;