import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import fetch from 'node-fetch'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class PlayerStatInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        /*fetch("/get-player-stat-info")
            .then(res => res.json())
            .then(result => {
            console.log(result)
            this.setState({ data: result, isLoaded: true });
            });*/
            
            this.setState({ data: [], isLoaded: true })
        };

    render() {
        const data = this.state.data;
        const isLoaded = this.state.isLoaded;
        if (!isLoaded) {
            return (
            <div className="players">
                <p className="players-loading">
                Loading...    
                </p>
            </div>
            );
        } else {
            return (     
            <li className="cads__item">   
                <Link to="/players" className='cards__item__link'>
                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Rank</TableCell>
                                <TableCell>Least Scrubby Round</TableCell>
                                <TableCell>Most Scrubby Round</TableCell>
                                <TableCell>Average Score from Par</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.date} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                                <TableCell component="th" scope="row" align="center">{row.rank}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.year_joined}</TableCell>
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

export default PlayerStatInfo;
