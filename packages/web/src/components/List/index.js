import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Grid,
} from '@material-ui/core';

import avatar1 from '../../assets/images/1.jpg';
import avatar2 from '../../assets/images/2.jpg';
import avatar3 from '../../assets/images/3.jpg';

const styles = () => ({
  root: {
    width: 295,
    backgroundColor: '#F9F9F9',
  },
  inline: {
    display: 'inline',
  },
  grid: {
    flexWrap: 'nowrap',
  },
  button: {
    color: '#4A90E2',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <Grid container alignItems="center" className={classes.grid}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            primary="George Michel"
            secondary={<React.Fragment>Double Room Suite - Aug 25 to Aug 26</React.Fragment>}
          />
          <Button color="primary" className={classes.button}>
            View
          </Button>
        </Grid>
      </ListItem>
      <ListItem alignItems="flex-start">
        <Grid container alignItems="center" className={classes.grid}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="Michael Jackson"
            secondary={<React.Fragment>Double Room Suite - Aug 25 to Aug 26</React.Fragment>}
          />
          <Button color="primary" className={classes.button}>
            View
          </Button>
        </Grid>
      </ListItem>
      <ListItem alignItems="flex-start">
        <Grid container alignItems="center" className={classes.grid}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="Jon Mayer"
            secondary={<React.Fragment>Double Room Suite - Aug 25 to Aug 26</React.Fragment>}
          />
          <Button color="primary" className={classes.button}>
            View
          </Button>
        </Grid>
      </ListItem>
      <ListItem alignItems="flex-start">
        <Grid container alignItems="center" className={classes.grid}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="Jon Mayer"
            secondary={<React.Fragment>Double Room Suite - Aug 25 to Aug 26</React.Fragment>}
          />
          <Button color="primary" className={classes.button}>
            View
          </Button>
        </Grid>
      </ListItem>
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
