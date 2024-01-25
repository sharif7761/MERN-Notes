import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts.jsx';
import Form from './components/Form/Form';
import useStyles from './styles';
import memories from './images/memories.png';
function App() {
  const classes = useStyles();
  return (
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">Notes</Typography>
              <img className={classes.image} src={memories} alt="icon" height="60" />
          </AppBar>
          <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts  />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <Form  />
                  </Grid>
              </Grid>
          </Container>
      </Container>
  )
}

export default App
