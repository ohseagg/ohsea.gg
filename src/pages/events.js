import * as React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"
import GameSelect from "../components/Events/gameSelect"
import PrizeSlider from "../components/Events/prizeSlider"
import LargeEvent from "../components/LandingPageComponents/largeEvent"

import data from "../data/landingEventData"
import  "../styles/style.scss"

Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
}

class EventsPage extends React.Component {
    constructor(){
        super()
        this.state = {
            display: 0,
            displays: 3
        }
    };

    arrowHandler = (type) => {
        console.log(type)
        console.log(this.state.display)
        this.setState((preState) => {
            return {display: type === 1 ? (preState.display - 1).mod(preState.displays)
            : (preState.display + 1).mod(preState.displays)};
        });
    }    

    render () {
        return (
            <Layout>
                <Seo title="Events & Leagues" />
                <div className="dark-bg bg-events">
                    <div className="top-section">
                        <h1 className="large-header">
                            MAKE YOUR MARK IN<br/><span className="red-text">ONTARIO ESPORTS</span>
                        </h1>
                        <div className="filter-options">
                            <div className="games-content">
                                <h3>Games</h3>
                                <GameSelect
                                switchHandler={this.arrowHandler.bind(this)}
                                displayGame={this.state.display}
                                />
                            </div>
                            <div className="slider-content">
                                <h3>Prize Pool</h3>
                                <PrizeSlider />
                            </div>
                        </div>
                        <div className="btn-fill filter-btn">
                            Filters
                        </div>

                        <div className="events-section">
                            <div className="events">
                                <LargeEvent data={data.LgEvent1} filter={this.state.display}/>
                                <LargeEvent data={data.LgEvent2} filter={this.state.display}/>
                            </div>
                            {/* 
                            components below are for smaller (monthly random games , etc.) events
                            - not needed right now
                            */}
                            {/* <div className="events s-events">
                            <SmallEvent/>
                            <SmallEvent/>
                            <div className="last-s-event">
                                <SmallEvent/>
                            </div>
                            </div>
                            <Link to="/" className="subtitle red-text" >
                            See More <GoChevronRight className="chevron-link"/>
                            </Link> */}
                        </div>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default EventsPage