import { Card, CardActions, CardContent, TextField, Button } from "@material-ui/core";
import React from "react";


export default function App() {
    const submit = () => {
        alert("Hello");
    }

    return (
        <>
            <Card>
                <CardContent>
                    <TextField fullWidth/>
                    <TextField fullWidth/>
                </CardContent>
                <CardActions>
                    <Button onClick={submit} >
                            Submit
                    </Button>
                </CardActions>
            </Card>
        </>
    )   
}