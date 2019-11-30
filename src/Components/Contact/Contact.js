import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Image4 from '../Images/DianaCameraVideo.jpg';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../GridContent/GridContent.css';
import './Contact.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5em 2em',
    height: '80vh',
    [theme.breakpoints.up('sm')]: {
        marginTop: '7%',
        height: '75vh'
      },
    [theme.breakpoints.up('xl')]: {
          marginTop: '10%',
          height: '70vh'
      },
  },

  paper1: {
      font: `700 3rem 'Dancing Script', cursive !important`,
      paddingTop: '20px',
      paddingBottom: '20px',
      width: 'auto',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#c71585',
      position: 'relative',
      zIndex: '1',
      [theme.breakpoints.up('sm')]: {
        paddingTop: '25px',
        height: '60px',
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        float: 'right',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        width: '70%',
        height: '100px',
        paddingTop: '30px',
      },
    },
  paper2: {
    padding: theme.spacing.unit * 2,
    width: '400px',
    height: '100px',
    background: `url(${Image4}) center no-repeat`,
    backgroundSize: 'contain',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
        width: '600px',
    },
    [theme.breakpoints.up('md')]: {
        backgroundSize: 'cover',
        paddingLeft: '3em',
        paddingRight: '2em',
        marginLeft: '-4em',
        marginTop: '2em',
        width: '70%',
        height: '200px',
        position: 'relative',
        zIndex: '1',
    },
    [theme.breakpoints.down('xs')]: {
        width: '280px'
    },
  },
  paper3: {
    padding: theme.spacing.unit * 2, 
    fontSize: 30,
    fontFamily: `'Josefin Sans', sans-serif`,
    paddingLeft: '15%',
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
        paddingLeft: '1em',
        paddingTop: '1.5em',
        marginTop: '-5em',
        marginLeft: '7em',
        textAlign: 'left', 
        width: '100%',
        border: '2px solid #c71585',
        position: 'relative',
        // zIndex: '-1',
    },
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '1em',
        paddingTop: '1.5em',
        marginTop: '-5em',
        marginLeft: '10em',
        textAlign: 'left', 
        width: '85%',
        border: '2px solid #c71585',
        position: 'relative',
        // zIndex: '-1',
    },
  },
  mail: {
    paddingLeft: '0.5em',
    paddingRight: '2em',
    fontSize: '20px',
    [theme.breakpoints.up('md')]: {
        paddingLeft: '1em',
        fontSize: '30px',
    }
  },
  media: {
    height: 500,
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.50),
    },
  },

  button: {
    marginBottom: '1em',
    padding: '0 1.2em',
    justifyContent: 'center',
  },

  card: {
    border: 'none',
    
    height: '70vh',
  },

});


const GridContent =(props) => {

  const { classes } = props;


  return (
    <div className={classes.root}>
      
      <Grid container spacing={0} className='animate fadeIn'>
        
        <Grid item xs={12}  md={6}>
        <Paper className={classes.paper1}>
          Ma gasesti pe:
        </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
        <Paper className={classes.paper2}>
        </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
        <Paper className={classes.paper3}>
            <div>
            <IconButton href="https://www.facebook.com/dianaparvu85/" target="_blank" style={{color: '#c71585', fontSize: '50px'}}>
                <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
              <a href="https://www.facebook.com/dianaparvu85/" style={{color: '#c71585'}}>Facebook </a>
            </div>
            <div>
            <IconButton href="https://www.instagram.com/dianaparvu/" target="_blank" style={{color: '#c71585', fontSize: '50px'}}>
                  <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
              <a href="https://www.instagram.com/dianaparvu/" style={{color: '#c71585'}}>Instagram </a>
            </div>
            <div>
            <IconButton href="https://www.youtube.com/channel/UCrZix_xgK124SQbAUWsy14g" target="_blank" style={{color: '#c71585', fontSize: '50px'}}>
                <FontAwesomeIcon icon={faYoutube} />
            </IconButton>
              <a href="https://www.youtube.com/channel/UCrZix_xgK124SQbAUWsy14g" style={{color: '#c71585'}}>Youtube</a>  
            </div>
            <div className={classes.mail}>
              Sau poti sa-mi scrii la prvdiana[at]yahoo.com
            </div>
            
          
        </Paper>
        </Grid>

      </Grid>

    </div>
  );
}

GridContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridContent);
