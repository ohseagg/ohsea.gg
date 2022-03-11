import * as React from "react"
import { Component } from "react"
// import { Link } from "gatsby"
import {
    Container,
    Box,
    LeftArrow,
    RightArrow,
} from './gameSelectElements'
// import EventsPage from '../../pages/events'

class GameSelect extends Component {
    constructor(props) {
        super(props)
        this.displayGameText = this.displayGameText.bind(this)
    }

    displayGameText = () => {
        switch(this.props.displayGame) {
            case 0:
                return (
                    <>All</>
                );
            case 1:
                return (
                    <>Valorant</>
                );
            case 2:
                return (
                    <>League</>
                );
            default:
                return (
                    null
                )
        }
    }

    render() {
        const l = 1
        const r = 2
        return (
            <Container>
                <div aria-hidden="true" onClick={() => this.props.switchHandler(l)} style={{cursor:'pointer'}}>
                    <LeftArrow/>
                </div>
                <Box>
                    {this.displayGameText()}
                </Box>
                <div aria-hidden="true" onClick={() => this.props.switchHandler(r)} style={{cursor:'pointer'}}> 
                    <RightArrow/>
                </div>
            </Container>
        )
    }
  }

export default GameSelect;