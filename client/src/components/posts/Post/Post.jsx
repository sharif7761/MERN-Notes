import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
//import moment from 'moment';

import useStyles from './styles';

const Post = () => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'  />
      <div className={classes.overlay}>
        <Typography variant="h6">post.creator</Typography>
        <Typography variant="body2">(post.createdAt).fromNow()</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" >...</Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">post.tags</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">post.title</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">post.message</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" > Like </Button>
        <Button size="small" color="primary" > Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
