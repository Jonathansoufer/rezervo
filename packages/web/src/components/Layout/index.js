import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Grid,
  Badge,
  Hidden,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  CalendarToday as CalendarIcon,
  CheckCircle as ReservationIcon,
  AttachMoney as RateIcon,
  People as GuestIcon,
  Report as ReportIcon,
  Notifications as NotificationsIcon,
  Search,
  AccountCircle,
  AccessTime,
} from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#FFF',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#4E546C',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#4E546C',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#EEF4F9',
    padding: theme.spacing.unit * 3,
  },
  bgToolbar: {
    backgroundColor: '#555C78',
  },
  drawerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFF',
  },
  menuItem: {
    color: '#A8B7C5',
  },
  gutters: {
    paddingRight: 24,
    paddingLeft: 0,
  },
  menuList: {
    marginTop: 17,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen, open: !state.open }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, title, children } = this.props;
    const { open, mobileOpen } = this.state;

    const drawer = (
      <div>
        <Grid
          className={[classes.toolbar, classes.bgToolbar]}
          container
          justify="center"
          alignItems="center"
        >
          {open ? (
            <Typography variant="h5" className={classes.drawerTitle}>
              REZERVO
            </Typography>
          ) : null}
        </Grid>
        <List className={classes.menuList}>
          <MenuItem className={classes.menuItem} component={Link} to="/dashboard">
            <ListItemIcon className={classes.menuItem}>
              <DashboardIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Dashboard
          </MenuItem>
          <MenuItem className={classes.menuItem} button>
            <ListItemIcon className={classes.menuItem}>
              <CalendarIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Calendar
          </MenuItem>
          <MenuItem className={classes.menuItem} component={Link} to="/reservations">
            <ListItemIcon className={classes.menuItem}>
              <ReservationIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Reservation
          </MenuItem>
          <MenuItem className={classes.menuItem} button>
            <ListItemIcon className={classes.menuItem}>
              <RateIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Rate and Availability
          </MenuItem>
          <MenuItem className={classes.menuItem} component={Link} to="/guests">
            <ListItemIcon className={classes.menuItem}>
              <GuestIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Guest
          </MenuItem>
          <MenuItem className={classes.menuItem} button>
            <ListItemIcon className={classes.menuItem}>
              <ReportIcon style={{ marginRight: 16 }} />
            </ListItemIcon>
            Report
          </MenuItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classNames({ [classes.gutters]: !open })}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="space-between" alignItems="center">
              <Typography
                variant="h6"
                style={{
                  color: '#6C6C6C',
                }}
                noWrap
              >
                {title}
              </Typography>
              <div className={classes.sectionDesktop}>
                <IconButton color="8CA0B3">
                  <Search />
                </IconButton>
                <IconButton color="8CA0B3">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton color="8CA0B3">
                  <Badge badgeContent={1} color="primary">
                    <AccessTime />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="8CA0B3"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
            onClose={this.handleDrawerToggle}
            open={mobileOpen}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            onMouseOut={this.handleDrawerClose}
            onMouseOver={this.handleDrawerOpen}
            open={open}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true }),
)(MiniDrawer);
