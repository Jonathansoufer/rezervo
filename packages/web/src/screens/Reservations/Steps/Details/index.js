import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card, Avatar, CardContent, Typography, TextField, Grid,
} from '@material-ui/core';

import { InsertPhoto } from '@material-ui/icons';

const styles = theme => ({
  card: {
    marginTop: 24,
    minWidth: 275,
    height: 620,
  },
  content: {
    padding: 0,
  },
  wrapperTitle: {
    height: 51,
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    paddingLeft: 16,
  },
  avatarWrapper: {
    marginTop: 16,
    marginLeft: 16,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  form: {
    padding: 16,
  },
  textField: {
    width: '100%',
  },
  actions: {
    margin: 0,
    padding: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const Details = ({ classes }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Grid className={classes.wrapperTitle} container alignItems="center">
        <Typography className={classes.title}>Reservations Details</Typography>
      </Grid>

      <Grid className={classes.avatarWrapper} container>
        <Avatar className={classes.avatar}>
          <InsertPhoto style={{ width: 50, height: 50 }} />
        </Avatar>
      </Grid>

      <Grid className={classes.form} container spacing={16}>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="First name"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Last name"
            type="Checkin"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Email"
            type="email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Phone"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Birthday"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Gender"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="Country"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            label="TaxID"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

Details.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Details);
