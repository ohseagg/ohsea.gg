import * as React from "react"
import { Link } from "gatsby"
import "../../styles/style.scss"

/* 
FILTER PROP:
filter={0} represents ALL GAMES, use filter={0} on the landing page
*/


function GameLogo(props) {
  if (props.data) {

    // !! ADD NEW GAME LOGOS HERE

    switch(props.data.game) {
      case 1:
        return (
          <img className="game-logo" src={require('../../images/Valorant.png').default} alt="Valorant"/>
        );
      case 2:
        return (
          <img className="game-logo" src={require('../../images/League.png').default} alt="League"/>
        );
    }   
  }
  return(null)
}

function GameImg(props) {
  if (props.data) {

    // !! ADD NEW GAME IMAGES HERE

    switch(props.data.game) {
      case 1:
        return (
          <img className="game-img" src={require('../../images/ValCharacters.png').default} alt="Valorant Characters"/>
        );
      case 2:
        return (
          <img className="game-img" src={require('../../images/LeagueCharacters.png').default} alt="League Characters"/>
        );
    }   
  }
  return(null)
}

function Event(props) {
  return (
    <div className="l-event-wrapper">
      <div className="l-event-container">
        {/* 2 divs for space-between alignment */}
        <div>
          <div className="event-name-container">
            <GameLogo data={props.data}/>
            <div className="event-header">
              {props.data ? props.data.title : "Loading"}
            </div>
          </div>
          <div className="event-prize">
            {props.data ? props.data.prize : "Loading"} Prize Pool
          </div>
          <div className="event-details">
            {props.data ? props.data.detail1 : "Loading"}
          </div>
          <div className="event-details">
            {props.data ? props.data.detail2 : "Loading"}
          </div>
          <div className="event-details">
            {props.data ? props.data.detail3 : "Loading"}
          </div>
        </div>
        <div>
          <div className="btn-fill">See Details</div>
        </div>
      </div>
      <div className="game-img-wrapper">
        <GameImg data={props.data} />
      </div>
    </div>
  )
}

export default function LargeEvent(props) {
  if (props.filter) {
    if (props.filter === 0) {
      return (
        <Event data={props.data}/>
      );
    }
    else {
      if (props.data.game === props.filter) {
        return (
          <Event data={props.data}/>
        );
      }
      return(null)
    }
  }
  return(
    <Event data={props.data}/>
  )
}