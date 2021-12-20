import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import fetch from 'node-fetch'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class AnnouncementsCard extends Component{
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
    const data = this.state.data;
    const isLoaded = this.state.isLoaded;
    if (!isLoaded) {
        return (
        <div className="announcements">
            <p className="announcements-loading">
            Loading...    
            </p>
        </div>
        );
    } else {
      return (     
        <li className="cads__item">   
          <Link to="/announcements" className='cards__item__link'>
            <TableContainer>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                  <TableBody>
                  {data.map((row) => (
                      <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                        <TableCell component="th" scope="row">{row.title}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
            </TableContainer>
          </Link>            
        </li>
      );
    }
  }
}

export default AnnouncementsCard;