import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button
} from '@material-ui/core';

import Table from './Table';

const styles = theme => ({
  card: {
    marginTop: 24,
    minWidth: 275,
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

const Availabity = ({ classes }) => (
  <div>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid className={classes.wrapperTitle} container alignItems="center">
          <Typography className={classes.title}>Search Availability</Typography>
        </Grid>

        <Grid className={classes.form} container spacing={16}>
          <Grid item xs={3}>
            <TextField
              id="outlined-search"
              label="Source"
              type="Source"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-search"
              label="Check-in"
              type="Checkin"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-search"
              label="Check-out"
              type="Checkout"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-search"
              label="Accommodation"
              type="Accommodation"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid className={classes.actions} container justify="flex-end">
          <Button style={{ marginRight: 10 }}>Clear</Button>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Grid>
      </CardActions>
    </Card>

    <Table />
  </div>
);

Availabity.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Availabity);
