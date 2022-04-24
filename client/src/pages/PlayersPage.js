import React from 'react';
import PlayersStatInfo from '../components/PlayerStatInfo';
import PlayerBio from '../components/PlayerBio';
import './PlayersPage.css';

function PlayersPage() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* IF NO PLAYER SELECTED Show all player cards with rank and score info */}


                        {/* ELSE Show individual player info with bio and more specific stats */}
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
    )
}

export default PlayersPage;