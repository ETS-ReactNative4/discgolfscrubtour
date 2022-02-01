import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import fetch from 'node-fetch'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class EventsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        fetch("/get-events")
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
            <div className="events">
                <p className="eventss-loading">
                Loading...    
                </p>
            </div>
            );
        } else {
            return (     
            <li className="cads__item">   
                <Link to="/events" className='cards__item__link'>
                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead colspan={3}>
                            <TableRow>
                                <TableCell colSpan={3}>Upcoming Events</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.date} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                                <TableCell component="th" scope="row" colSpan={3}>
                                    <b>{row.eventName}</b> - <i style={{color:'orange'}}>{row.eventLocation}</i>
                                    <p style={{paddingLeft:'30px'}}>{row.eventDescription}</p>
                                    <p style={{paddingLeft:'30px'}}><b>{row.eventStart}<i style={{paddingRight:'0.25cm',paddingLeft:'0.25cm'}}>to</i>{row.eventEnd}</b></p>
                                </TableCell>                                       
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

export default EventsCard;
