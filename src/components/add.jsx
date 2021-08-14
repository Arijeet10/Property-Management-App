import React, { useState } from "react";

function Add() {

    return (
        <div>
            <form>
                <input type="text" name="fullName" placeholder="Enter full name" />
                <input type="text" name="desc" placeholder="Enter Description" />
                <input type="text" name="size" placeholder="Enter size" />
                <button type="submit">Add Property</button>
            </form>
        </div>
    )
}

export default Add;