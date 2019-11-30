import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css';

const styles = theme => ({
  root: {
    width: '100%',

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    fontFamily: `'Josefin Sans', sans-serif !important`,
    textTransform: 'none !important',
    fontSize: '1.7rem',
    color: '#c71585',
    paddingTop: '0.5em',
    "&:hover": {
      backgroundColor: '#FFF'
    }
  },
  title: {
    display: 'block',
    cursor: 'pointer',
    font: `35px 'Dancing Script', cursive !important`,
    marginLeft: '5%',
    textTransform: 'inherit',
    color: '#c71585',
    "&:hover": {
      backgroundColor: '#FFF'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 100,
    },
  },
  sectionDesktop: {
    display: 'none',
    paddingRight: '5%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    paddingRight: '5%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Navigation extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    // const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/DianaParvu/blog">
          <p className={classes.menuButton}>Blog</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/DianaParvu/vlog">
          <p className={classes.menuButton}>Vlog</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/DianaParvu/workshop">
             <p className={classes.menuButton}>Workshops</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/DianaParvu/tipsandcars">
           <Tooltip style={{fontWeight: 'bold', fontStyle: 'italic', color: '#000'}} title="by Sergiu Negotiu Piloff" TransitionComponent={Zoom}>
             <p className={classes.menuButton}>{'Tips&Cars'}</p>
            </Tooltip>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/DianaParvu/contact">
          <p className={classes.menuButton}>Contact</p>
        </MenuItem>
      </Menu>
    );

    return (
      
        <div className={classes.root}>

          <AppBar position="fixed" style={{background: '#FFF', boxShadow: 'none'}}>
            <Toolbar>
              <Button 
                className={classes.title} 
                color="inherit" 
                component={Link} to="/DianaParvu/"
                >
                Home
              </Button>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button component={Link} to="/DianaParvu/blog" className={classes.menuButton} color="inherit">
                  <div className='menuLink'>Blog</div>
                </Button>
                <Button component={Link} to="/DianaParvu/vlog" className={classes.menuButton} color="inherit">
                <div className='menuLink'>Vlog</div>
                </Button>
                <Button component={Link} to="/DianaParvu/workshop" className={classes.menuButton} color="inherit">
                <div className='menuLink'>Workshops</div>
                </Button>
                <Tooltip style={{fontWeight: 'bold', fontStyle: 'italic', color: '#000'}} title="by Sergiu Negotiu Piloff" TransitionComponent={Zoom}>
                  <Button component={Link} to="/DianaParvu/tipsandcars" className={classes.menuButton} color="inherit">
                  <div className='menuLink'>{'Tips&Cars'}</div>
                  </Button>
                </Tooltip>
                <Button component={Link} to="/DianaParvu/contact" className={classes.menuButton} color="inherit">
                <div className='menuLink'>Contact</div>
                </Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MenuIcon style={{color: '#c71585', fontSize: '1.5em'}}/>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {/* {renderMenu} */}
          {renderMobileMenu}
          
        </div>
      
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);