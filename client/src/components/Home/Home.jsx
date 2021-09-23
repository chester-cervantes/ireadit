import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';

import Posts from '../Posts/Posts.jsx';
import Form from '../Form/Form.jsx';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions';

import useStyles from './styles.jsx';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={2}>
                    <Grid item sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
