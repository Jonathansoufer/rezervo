import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
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
});

let id = 0;
function createData(name, lastName, country, source) {
  id += 1;
  return {
    id,
    name,
    lastName,
    country,
    source,
  };
}

const rows = [
  createData('Jonathan', 'Ferreira', 'Portugal', 'Booking.com'),
  createData('Guilherme', 'Jabur', 'Brasil', 'Booking.com'),
  createData('Matheus', 'Castro', 'Brasil', 'AirBnB'),
  createData('Leonardo', 'Maldonado', 'Brasil', 'Expedia'),
  createData('Raphael', 'Thomazella', 'Brasil', 'Hostelworld'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Grid className={classes.wrapperTitle} container alignItems="center">
        <Typography className={classes.title}>Results</Typography>
      </Grid>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
