import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core';

import useStyles from './styles.jsx';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../store/actionType.js';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT });

        history.push("/");

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    console.log("user");
    console.log(user);
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" variant="h3" align="center">ireadit</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h5">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>

                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
