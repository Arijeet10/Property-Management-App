import { Button, FormControl, FormLabel, Input } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import React, { useState } from "react";

function Add(props) {

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

    function handleClick(event) {
        event.preventDefault();
        props.addPropItem(propData)
    }

    return (
        <div>
            <FormControl>
                <FormLabel>Add Property</FormLabel>
                <Input aria-describedby="my-helper-text" type="text" name="fullName" value={propData.fullName} placeholder="Enter property name" onChange={handleChange} />
                <Input aria-describedby="my-helper-text" type="text" name="desc" value={propData.desc} placeholder="Give some Description" onChange={handleChange} />
                <Input aria-describedby="my-helper-text" type="text" name="size" value={propData.size} placeholder="Enter property size" onChange={handleChange} />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={handleClick}
                >
                    Add
                </Button>
            </FormControl>
        </div>
    )
}

export default Add;