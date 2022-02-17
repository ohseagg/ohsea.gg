import * as React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import  "../styles/style.scss"
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"
import displayEvent from "../globals/displayEvent"
import GameSelect from "../components/Events/gameSelect"
import PrizeSlider from "../components/Events/prizeSlider"

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
                            MAKE YOUR MARK IN<br/><span className="red-text large-header">ONTARIO ESPORTS</span>
                        </h1>
                        <div className="filter-options">
                            <div className="games-content">
                                <h3 className="games-title">Games</h3>
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
                    </div>
                </div>
            </Layout>
        );
    }
}

export default EventsPage