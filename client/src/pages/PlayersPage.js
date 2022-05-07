import PlayersStatInfo from '../components/PlayerStatInfo';
import PlayerBio from '../components/PlayerBio';
import PlayerOverview from '../components/PlayerOverview';
import './PlayersPage.css';

import React, { Component } from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

import fetch from 'node-fetch'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class PlayersPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        isLoaded: false,
        allPlayerData: [],
        selectedPlayer: props.selectedPlayer
        };
    }

    componentDidMount() {
        fetch("/get-all-player-info")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({ allPlayerData: result, isLoaded: true });
        });
    }

    render() {
        const isLoaded = this.state.isLoaded;
        if (this.state.selectedPlayer === "None") {            
            const allPlayerData = this.state.allPlayerData;
            return (
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                {allPlayerData.map((playerData) =>
                                    <PlayerOverview 
                                        name={playerData.player_name}
                                        rank={playerData.rank}
                                        rating={playerData.average_rating}
                                        averageScore={playerData.average_score}
                                        photo={playerData.player_photo}
                                    />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            fetch("/get-selected-player-info", {selectedPlayer: this.state.selectedPlayer})
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({selectedPlayerData: result, isLoaded: true})
            })
            return (     
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                <div class="playerInfo">
                                    {/* Player Photo */}
                                    <p>Player Photo</p>
                                
                                    {/* Player Bio */}
                                    <PlayerBio/>
                                </div>
                                <div class="stats">
                                    {/* Player Stats Overview */}
                                    {/*   Rank   |   Least Scrubby Round   |   Most Scrubby Round   |   Average from Par */}
                                    <PlayersStatInfo/>
        
                                    {/* Recent Rounds */}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default PlayersPage;