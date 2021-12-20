import React, { Component } from 'react';
import './App.css';
import fetch from 'node-fetch';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import AnnouncementsCard from './components/AnnouncementsCard';
import PlayersCard from './components/PlayersCard';
import EventsCard from './components/EventsCard';
import Cards from './components/Cards'

// IMPORT IMAGES
import logo from '../resources/DiscGolfScrubTour.png';
import boulder from '../resources/boulder-disc-golf.png';
import blueRibbonPines from '../resources/blue-ribbon-pine-disc-golf.jpg';
import beaverRanch from '../resources/beaver-ranch-disc-golf.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const isLoaded = this.state.isLoaded;
    if (!isLoaded) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/> 
            <img src={boulder} className="App-image1" alt="boulder"/>
            <img src={blueRibbonPines} className="App-image2" alt="blueRibbonPines"/>
            <img src={beaverRanch} className="App-image3" alt="beaverRanch"/>
          </div>
          
          <p className="App-intro">
            Loading...    
          </p>
        </div>
      );
    } else {
      return ( 
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/> 
            <img src={boulder} className="App-image1" alt="boulder"/>
            <img src={blueRibbonPines} className="App-image2" alt="blueRibbonPines"/>
            <img src={beaverRanch} className="App-image3" alt="beaverRanch"/>
          </div>
          <Router>
            <Navbar/>
            <Cards/>
          </Router>
        </div>  
      );
    }
  }
}

export default App;
