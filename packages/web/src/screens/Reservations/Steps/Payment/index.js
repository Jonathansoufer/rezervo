import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, Typography, Grid,
} from '@material-ui/core';

const styles = theme => ({
  card: {
    marginTop: 24,
    minWidth: 275,
  },
  content: {
    padding: 0,
  },
  summary: {
    paddingTop: 16,
  },
  wrapperTitle: {
    height: 51,
    borderRadiusTop: 4,
    backgroundColor: theme.palette.primary.main,
  },
  cardSummary: {
    height: 620,
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

const Payment = ({ classes }) => (
  <Grid className={classes.summary} container spacing={24}>
    <Grid item xs={4}>
      <Card className={classes.cardSummary}>
        <CardContent className={classes.content}>
          <Grid className={classes.wrapperTitle} container alignItems="center">
            <Typography className={classes.title}>Guest Information Summary</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={4}>
      <Card className={classes.cardSummary}>
        <CardContent className={classes.content}>
          <Grid className={classes.wrapperTitle} container alignItems="center">
            <Typography className={classes.title}>Accommodation Summary</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={4}>
      <Card className={classes.cardSummary}>
        <CardContent className={classes.content}>
          <Grid className={classes.wrapperTitle} container alignItems="center">
            <Typography className={classes.title}>Payment Summary</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

Payment.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Payment);
