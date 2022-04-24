import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import fetch from 'node-fetch'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class PlayerBio extends Component {
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
                 <TableContainer>
                    <Table sx={{minWidth: 150}} aria-label="simple table">
                        <TableHead>
                            Player Bio
                        </TableHead>
                        <TableBody >                        
                            <TableRow align="left">
                                Age:  YY
                            </TableRow>
                            <TableRow align="left">
                                Height:  H'H"   Weight:  XXX lbs
                            </TableRow>
                            <TableRow align="left"> 
                                Home Town:  Location, USA
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>          
            </li>
            );
        }
    }
}

export default PlayerBio;
