import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from '../Images/DianaWorkshop.jpg';
import './Workshop.css';
import CheckIcon from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    margin: '5% auto',
    [theme.breakpoints.down('sm')]: {
      margin: '12% auto',
    },
  },
  paper1: {
    padding: theme.spacing.unit * 2,
    background: `url(${Image})`,
    backgroundSize: 'cover',
    height: '400px',
    boxShadow: '0px 5px 5px 0px rgba(255,255,255,0.2), 0px 2px 2px 0px rgba(255,255,255,0.14), 0px 3px 1px -2px rgba(255,255,255,0.12)',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      marginTop: 10,
      paddingLeft: '3em',
      position: 'relative',
      zIndex: '1',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '500px',
      height: '350px',
      marginTop: 20,
      marginLeft: '20%',
      position: 'relative',
      zIndex: '1',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '30%',
    }
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    background: '#c71585',
    color: 'white',
    fontSize: 26,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit,
      paddingLeft: '5em',
      paddingRight: '1em',
      marginLeft: 30,
      marginTop: '3em',
      width: '50%',
      position: 'relative',
      zIndex: '0',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '5em',
      paddingRight: '2em',
      marginLeft: '-15%',
      marginTop: '3em',
      width: '70%',
      position: 'relative',
      zIndex: '0',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '-20%',
      marginTop: '5em',
    }
  },
  paper3: {
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    fontSize: 26,
    [theme.breakpoints.up('md')]: {
      paddingLeft: '2em',
      paddingTop: '5em',
      marginTop: '-4em',
      position: 'relative',
      zIndex: '-1',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '2em',
      paddingTop: '5em',
      position: 'relative',
      zIndex: '-1',
      margin: 'auto 10em',
      marginTop: '-4em',
    },
  },

  paper4: {
    padding: '1em 1em',
    color: '#fff',
    background: '#c71585',
    width: '80%',
    height: '80px',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '26px',
    marginBottom: theme.spacing.unit, 
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing.unit * 4, 
      marginLeft: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    }
  },
  paper5: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    boxShadow: 'none',
    font: `700 60px 'Dancing Script', cursive !important`,
  },
  paper6: {
    padding: '3em',
    margin: '0 auto',
  },
  paper7: {
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    boxShadow: 'none',
    font: `700 60px 'Dancing Script', cursive !important`,
    paddingBottom: '1em'
  },
  highlight1: {
    font: `700 60px 'Dancing Script', cursive !important`,
  },
  button: {
    textTransform: 'inherit',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    marginBottom: '3em',
    fontSize: '30px',
    maxWidth: '30%',
    fontFamily: 'inherit',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80%',
      fontSize: '25px',
    }
  },
});

const Workshop =(props) => {

  const { classes } = props;


  return (
    <div className={classes.root}>

      <Grid container spacing={0} className='animate fadeIn'>
        
        <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.paper1}>
        </Paper>
        </Grid>

        <Grid item sm={12} md={6}>
        <Paper className={classes.paper2}>
          <p>Sunt oameni pentru care vorbitul in public vine natural. Se distreaza cand fac asta.</p>
          <p>Si sunt oameni ingroziti de vorbitul in public. Este normal.</p>
          <p className={classes.highlight1}>Toti suntem diferiti.</p>
        </Paper>
        </Grid>

        <Grid item sm={12} md={12}>
        <Paper className={classes.paper3}>
          <p> Studiile arată că frica de a vorbi în public bate frica de moarte.</p> 
          <p className={classes.highlight1}>Dar credeti-ma, se trateaza!</p>
          <p>In primul rând toata lumea trebuie să știe că aceasta frică este absolut normală. </p>
          <p>In opt ani de televiziune am invatat ca ORICINE poate sa-si 'trateze' teama de a vorbi in public sau in fata camerei. Parte din job-ul meu era sa intervievez persoane din diverse domenii. Am vazut adevarati specialisti din diferite domenii care, in fata camerei, fie ramaneau fara voce, fie se blocau si nu mai stiau despre ce trebuie sa vorbeasca. </p>
          <p>Dar, invatandu-i cateva tehnici si o serie de reguli de aur, interviurile au iesit excelent. </p>
          <p>Dupa ceva timp, oameni dintre cei pe care i-am intervievat si care inghetau pur si simplu la ideea de a vorbi in fata camerei, deci in fata a milioane de oameni, m-au sunat ulterior pentru a-mi multumi.</p>
          <p>De ce?</p>
          <p>Pentru ca ceea ce i-am invatat, nu numai ca i-a ajutat sa duca la capat interviul dar i-a ajutat sa-si depaseasca teama de a vorbi in public, de a sustine prezentari, discursuri si asa mai departe.</p>
        </Paper>
        </Grid>
         <Grid item sm={12} md={12}>
            <Paper className={classes.paper5}>
            Asa ca iti propun un workshop in care:
            </Paper>
          </Grid>
      </Grid>

    
        <Grid className={classes.paper6} container spacing={24}>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  <div>Sa-ti arat de unde vine frica de a vorbi in public.</div>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa te invat tehnici care sa ne ajute sa gestionam frica.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa-ti arat cum sa te pregatesti pentru un discurs
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa-ti arat cum să redactezi un discurs.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa te invat tehnici prin care să captăm atenția
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa-ti arat cum sa-ti prezinti ideile intr-un mod cat mai atractiv
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa te pregatesc pentru momente imprevizibile.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa te invat cum sa iesi dintr-o situatie tensionata.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Sa exersam pentru a reusi un discurs pefect.
                  </Paper>
                </Grid>
              </Grid>
       
          <Paper className={classes.paper7}>
          Suna interesant?
          </Paper>

          <div style={{display: 'flex', justifyContent: 'center' }}>
          <Button className={classes.button} component={Link} to="/DianaParvu/contact">
          Hai sa stam de vorba!
          </Button>
          </div>


    </div>
  );
}

Workshop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
