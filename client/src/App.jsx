import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/actions'
import Posts from './components/Posts/Posts.jsx'
import Form from './components/Form/Form.jsx'

import useStyles from './styles.jsx'

const App = () => {
    // TODO sharing components using react, redux will be later
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h3" align="center">ireadit</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={2}>
                        <Grid item sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;