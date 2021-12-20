import React from 'react'
import AnnouncementsCard from './AnnouncementsCard'
import EventsCard from './EventsCard'
import PlayersCard from './PlayersCard'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <AnnouncementsCard/>
                        <EventsCard/>
                        <PlayersCard/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;