import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Grid';
import Jumbotron from '../Jumbotron/Jumbotron';
import GridContent from '../GridContent/GridContent';
import Image from '../Images/DianaNobg.png';


const styles = theme => ({
    paperContainer: {
        background: `#FFF`,
        height: '75vh',
        paddingTop: '50px',
        [theme.breakpoints.up('sm')]: { height: '85vh'}
    },
  jumbotron: {
    background: `url(${Image}) transparent no-repeat right`,
    // marginRight: '5%', 
    height: '75vh',
    marginTop: '1%',
    backgroundSize: 'contain',
    [theme.breakpoints.up('sm')]: { height: '90vh', marginRight: '20%',}
  },
  jumbotronText: {
    marginLeft: 0,
  }
});

const Home = (props) => {

    const { classes } = props;
    return (
      <div>
                  <Container className={classes.paperContainer} >
                        <div className={classes.jumbotron}>
                          <Jumbotron />
                        </div>
                  </Container>
                  <GridContent />
      </div>
    );
  }

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);



