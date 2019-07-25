import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Grid,
  Typography,
  Hidden,
  Drawer,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  CssBaseline,
  // Fab,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search,
  MoreVert as MoreIcon,
  AccountCircle,
  AccessTime,
  Dashboard,
} from '@material-ui/icons/';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.common.white,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: '#FFF',
  },
  menuList: {
    marginTop: 41,
  },
  itemText: {
    color: '#A8B7C5',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  bgToolbar: {
    backgroundColor: '#555C78',
  },
  drawerTitle: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFF',
  },
  drawerPaper: {
    backgroundColor: '#4E546C',
    width: drawerWidth,
  },
  content: {
    backgroundColor: '#EEF4F9',
    height: '100vh',
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  selected: {
    color: '#A8B7C5',
    '&$selected': {
      color: '#2DD1AC',
    },
  },
  colorPrimary: {
    background: '#2DD1AC',
  },
  colorSecondary: {
    background: '#3F93F5',
  },
});

// @TODO move fns to class methods
class Header extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const {
      classes, container, children, title,
    } = this.props;
    const { mobileOpen, anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const drawer = (
      <div>
        <Hidden smDown>
          <Grid
            className={[classes.toolbar, classes.bgToolbar]}
            container
            justify="center"
            alignItems="center"
          >
            <Typography variant="h5" className={classes.drawerTitle}>
              REZERVO
            </Typography>
          </Grid>
        </Hidden>
        <MenuList className={classes.menuList}>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Dashboard
          </MenuItem>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Calendar
          </MenuItem>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Reservations
          </MenuItem>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Rates and Availabilty
          </MenuItem>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Guests
          </MenuItem>
          <MenuItem className={classes.itemText}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            Reports
          </MenuItem>
        </MenuList>
      </div>
    );

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Minha Conta</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Search />
            </Badge>
          </IconButton>
          <p>Menssagens</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notificações</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Perfil</p>
        </MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>

              <div className={classes.grow} />
              <Grid container justify="space-between" alignItems="center">
                <Typography
                  style={{
                    color: '#6C6C6C',
                    marginLeft: 240,
                    fontSize: 19,
                  }}
                >
                  {title}
                </Typography>
                <div className={classes.sectionDesktop}>
                  <IconButton color="8CA0B3">
                    <Search />
                  </IconButton>
                  <IconButton color="8CA0B3">
                    <Badge
                      badgeContent={4}
                      color="primary"
                      classes={{ colorPrimary: classes.colorPrimary }}
                    >
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="8CA0B3">
                    <Badge
                      badgeContent={1}
                      color="secondary"
                      classes={{ colorSecondary: classes.colorSecondary }}
                    >
                      <AccessTime />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="8CA0B3"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              </Grid>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
          <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} style={{ marginBottom: 24 }} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default compose(withStyles(styles))(Header);
