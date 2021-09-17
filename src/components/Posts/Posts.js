import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles'

import useStyles from './styles';

 const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    // const classes = makeStyles();


    return (
        !posts.length ? <CircularProgress /> : (
            //if posts is 0 (falsey) 
            //circular progress = loading spinner
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6} med={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
        )
    )
}

export default Posts;