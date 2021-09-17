import React from "react";
import { useSelector } from 'react-redux';
import Post from "./Post/Post.jsx";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from './styles.jsx'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector(state => state.posts)
    const classes = useStyles();
    console.log("posts")
    console.log(posts)
    console.log("setCurrid")
    console.log(setCurrentId)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
};

export default Posts;