import React from 'react'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

function PlayerOverview(props) {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {props.name}
                        <img src={props.photo} className="playerPhoto" alt="photo"/>
                        <TableContainer>
                            <Table sx={{minWidth: 250}} aria-label="simple table">                                
                                <TableBody>                                
                                    <TableRow key={props.name} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                                        <TableCell component="th" scope="row" align="center">{props.rank}</TableCell>
                                        <TableCell>{props.rating}</TableCell>
                                        <TableCell>{props.averageScore}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlayerOverview;