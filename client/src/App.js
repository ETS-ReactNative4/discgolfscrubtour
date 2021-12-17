import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import logo from '../resources/DiscGolfScrubTour.png';
import boulder from '../resources/boulder-disc-golf.png';
import blueRibbonPines from '../resources/blue-ribbon-pine-disc-golf.jpg';
import beaverRanch from '../resources/beaver-ranch-disc-golf.png';
import './App.css';
import fetch from 'node-fetch'
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("/get-announcements")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({ data: result, isLoaded: true });
      });
  }

  render() {
    const columns = [
      { field: 'date', headerName: 'DATE', width: 70},
      { field: 'message', headerName: 'MESSAgE', width: 130}
    ]
    const data = this.state.data;
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
        
          <TableContainer>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Announcement</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.date} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                    <TableCell component="th" scope="row">{row.date}</TableCell>
                    <TableCell align="right">{row.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

export default App;
