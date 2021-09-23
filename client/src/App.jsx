import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';

const App = () => {


    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;