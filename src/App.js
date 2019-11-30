import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './Components/Navigation/Navigation';
import Workshop from './Components/Workshop/Workshop';
import Home from './Components/Home/Home';
import Vlog from './Components/Vlog/Vlog';
import TipsAndCars from './Components/TipsAndCars/TipsAndCars';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import ScrollToTop from './Components/ScrollToTop';
import PostView from './Components/Blog/Post.js';
import './App.css';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    slug: ''
  }
  this.handleSlug = this.handleSlug.bind(this);
}

handleSlug (slugValue) {
  if (slugValue) {
    this.setState({slug: slugValue});
  }
  return slugValue;
}
  render() {
    console.log('state is now', this.state.slug)
    return (
      <Router>
      <ScrollToTop>
      <div>
        <Switch>
        <Route exact path="/"> 
              <Home />
          </Route>
          <Route exact path="/DianaParvu/">
              <Home />
          </Route>
            <Route path="/DianaParvu/blog">
              <Blog onSelectSlug={this.handleSlug}/>
            </Route>
            <Route path={`/DianaParvu/blog/:${this.state.slug}`}>
              <PostView slug={this.state.slug}/>
            </Route>  
            <Route path="/DianaParvu/workshop">
              <Workshop />
            </Route>
            <Route path="/DianaParvu/vlog">
              <Vlog />
            </Route>
            <Route path="/DianaParvu/tipsandcars">
              <TipsAndCars />
            </Route>
            <Route path="/DianaParvu/contact">
              <Contact />
            </Route>
        </Switch>
      </div>
      
      <div className="App">
        <Navigation />
        {/* <Home /> */}
    
      {/* // <div className="App">
      //   <Navigation onRouteChange={this.onRouteChange}/>
      //   { this.state.route === 'home' 
          ? <div>
                  <Container className={classes.paperContainer} >
                        <div className={classes.jumbotron}>
                          <Jumbotron onRouteChange={this.onRouteChange}/>
                        </div>
                    </Container>
                    <GridContent onRouteChange={this.onRouteChange}/>

              </div>
          : ( this.state.route === 'despre'
            ? <GridContent onRouteChange={this.onRouteChange}/> 
            : ( this.state.route === 'workshop'
                ? <Workshop onRouteChange={this.onRouteChange}/>
                : ( this.state.route === 'vlog'
                    ? <div className='animate one fadeIn'><Vlog /></div>
                    :( this.state.route === 'contact'
                      ? <div className='animate one fadeIn'><Contact /></div>
                      :<div></div>
                  )
                  )
              )
          )
        } */}
      <Footer />
      </div>
      </ScrollToTop>
    </Router>
    );
  }
}

export default App;



