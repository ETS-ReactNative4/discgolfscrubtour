import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import PlayersPage from './pages/PlayersPage';
import EventsPage from './pages/EventsPage';
import CoursesPage from './pages/CoursesPage';
import StatisticsPage from './pages/StatisticsPage';

// IMPORT IMAGES
import logo from '../resources/dgst-with-basket.png';
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
          </div>
          <Router>
            <Navbar/>            
            <Routes>
              <Route path="/" element={<Cards/>}/>
              <Route path="players" element={<PlayersPage selectedPlayer="None"/>}/>
              <Route path="events" element={<EventsPage/>}/>
              <Route path="courses" element={<CoursesPage/>}/>
              <Route path="stats" element={<StatisticsPage/>}/>
            </Routes>
            {/* <Page/> THIS WILL BE WERE THE NAVIGATED PAGE WILL LIE */}
          </Router>
        </div>  
      );
    }
  }
}

export default App;
