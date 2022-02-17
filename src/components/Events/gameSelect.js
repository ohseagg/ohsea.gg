import * as React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import displayEvent from "../../globals/displayEvent"
import {
    Container,
    Box,
    LeftArrow,
    RightArrow,
} from './gameSelectElements'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

class GameSelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <LeftArrow/>
                <Box>
                    All
                </Box>
                <RightArrow/>
            </Container>
        )
    }
  }

export default GameSelect;