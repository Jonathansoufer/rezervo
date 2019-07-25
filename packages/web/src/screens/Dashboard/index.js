import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withSizes from 'react-sizes';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import List from '../../components/List';
import Chart from '../../components/Chart';
import MarketChart from '../../components/MarketChart';

const styles = {
  reservations: {
    height: '260px',
  },
  bookings: {
    height: '100%',
  },
  first: {
    marginRight: 30,
  },
  cardContentTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8CA0B3',
  },
  cardContentCount: {
    textAlign: 'center',
    fontSize: 28,
    color: '#6C6C6C',
  },
  revenueAdd: {
    marginLeft: 8,
    color: '#F5A623',
    fontSize: 16,
  },
  chartContainer: {
    marginLeft: -38,
    marginTop: 16,
  },
  todayActivity: {
    fontSize: 16,
    color: '#000',
    marginBottom: 28,
  },
  market: {
    fontSize: 16,
    color: '#000',
    marginBottom: 28,
    marginLeft: 38,
  },
};

class Dashboard extends React.Component {
  state = {
    data: [
      { name: 'Mon', Visits: 22, Orders: 34 },
      { name: 'Tue', Visits: 12, Orders: 23 },
      { name: 'Wed', Visits: 50, Orders: 43 },
      { name: 'Thu', Visits: 47, Orders: 29 },
      { name: 'Fri', Visits: 58, Orders: 48 },
      { name: 'Sat', Visits: 43, Orders: 38 },
      { name: 'Sun', Visits: 44, Orders: 43 },
    ],
  };

  render() {
    const { classes, height } = this.props;
    const { data } = this.state;
    return (
      <div>
        <Layout title="Chalé da Vila">
          <Grid container spacing={24}>
            <Grid className={classes.reservations} item xs={3}>
              <Card title="Reservations">
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ height: '100%', paddingBottom: 58 }}
                >
                  <div className={classes.first}>
                    <Typography className={classes.cardContentTitle}>Arrivals</Typography>
                    <Typography className={classes.cardContentCount}>4</Typography>
                  </div>
                  <div>
                    <Typography className={classes.cardContentTitle}>Departures</Typography>
                    <Typography className={classes.cardContentCount}>2</Typography>
                  </div>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card title="Outlook">
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ height: '100%', paddingBottom: 58 }}
                >
                  <div>
                    <Typography className={classes.cardContentTitle}>Revenue</Typography>
                    <Grid container alignItems="center">
                      <Typography className={classes.cardContentCount}>$803.09</Typography>
                      <Typography className={classes.revenueAdd}>+$87.02</Typography>
                    </Grid>
                  </div>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card title="Reservation progress">
                <Typography component="div" className={classes.chartContainer}>
                  <Chart data={data} />
                </Typography>
              </Card>
            </Grid>
            <Grid style={{ height: height - 348 }} item xs={12}>
              <Card title="Bookings">
                <Grid
                  container
                  style={{
                    height: '100%',
                    display: 'flex',
                    flex: 1,
                    flexWrap: 'nowrap',
                  }}
                  alignItems="center"
                >
                  <div>
                    <Typography className={classes.todayActivity}>Todays Activity</Typography>
                    <List />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <Typography className={classes.market}>Market Termometer</Typography>
                    <Typography component="div">
                      <MarketChart />
                    </Typography>
                  </div>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      </div>
    );
  }
}

const mapSizesToProps = ({ height }) => ({
  height,
});

Dashboard.propTypes = {
  classes: PropTypes.shape().isRequired,
  height: PropTypes.number.isRequired,
};

export default withStyles(styles)(withSizes(mapSizesToProps)(Dashboard));
