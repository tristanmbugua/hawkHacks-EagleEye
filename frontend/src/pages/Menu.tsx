import React from "react";
import { AppBar, Toolbar, Button, Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#FFDAB9',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        '&:hover': {
            color: '#40E0D0',
        },
    },
    button: {
        color: "#61dafbaa",
        marginLeft: theme.spacing(2),
    },
    loginButton: {
        marginLeft: theme.spacing(2),
        backgroundColor: '#40E0D0',
        '&:hover': {
            backgroundColor: '#40E0D0',
        },
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Box display="flex">
                        <Link to="/addUser" className={classes.link}>
                            <Button className={classes.button} color="inherit">Add User</Button>
                        </Link>
                        <Link to="/removeUser" className={classes.link}>
                            <Button className={classes.button} color="inherit">Remove User</Button>
                        </Link>
                        <Link to="/deposit" className={classes.link}>
                            <Button className={classes.button} color="inherit">Deposit</Button>
                        </Link>
                        <Link to="/view" className={classes.link}>
                            <Button className={classes.button} color="inherit">Balance</Button>
                        </Link>
                        
                        <Link to="/withdrawal" className={classes.link}>
                            <Button className={classes.button} color="inherit">Withdrawal</Button>
                        </Link>
                        
                        {/* <Link to="/allUsers" className={classes.link}>
                            <Button className={classes.button} color="inherit">View All</Button>
                        </Link> */}
                        {/* <Link to="/" className={classes.link}>
                            <Button></Button>
                        </Link> */}
                        
                        {/* <Link to="/transactions" className={classes.link}>
                            <Button className={classes.button} color="inherit">Transactions</Button>
                        </Link> */}
                        
                        
                        
                    </Box>
                    {/* <Box>
                        <Link to="/login" className={classes.link}>
                            <Button className={`${classes.button} ${classes.loginButton}`} color="inherit">Login</Button>
                        </Link>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </>
    );
}
