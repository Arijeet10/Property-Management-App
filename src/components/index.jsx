import { Button, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";

function Home(props) {

    function handleDelete() {
        props.deleteProp(props.id)
    }

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Name: {props.propName}
            </Typography>
            <Typography variant="h3" gutterBottom>
                Description: {props.desc}
            </Typography>
            <Typography variant="h4" gutterBottom>
                Size: {props.size}
            </Typography>

            <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
            >
                Delete
            </Button>
        </div>
    )
}

export default Home;