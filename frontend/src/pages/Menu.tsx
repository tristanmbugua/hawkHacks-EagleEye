import React from "react";
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <div>
                        <Link to="/"><Button id="tool">Home!</Button></Link>
                        <Link to="/deposit"><Button id="tool">Deposit!</Button></Link>
                        <Link to="/view"><Button id="tool">View!</Button></Link>
                        <Link to="/withdrawal"><Button id="tool">Withdrawal!</Button></Link>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}