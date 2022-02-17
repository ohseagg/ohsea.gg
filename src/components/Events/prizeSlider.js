import * as React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import "../../styles/style.scss"
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import displayEvent from "../../globals/displayEvent"
import {colors} from "../../globals/colors"

class PrizeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vals: [displayEvent.minPrize, displayEvent.maxPrize],
        };
    }

    render() {
        const theme = createTheme({
            palette: {
                primary: {
                    main: colors.red,
                },
            },
        });

        const handleChange = (event, newValue) => {
            this.setState({ vals: newValue })
        };
        return (
            <ThemeProvider theme={theme}>
                <div className="prize-slider-container">
                    <Slider
                        getAriaLabel={() => 'Prize Pool Range'}
                        defaultValue={this.state.vals}
                        max={1000}
                        step={10}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        color="primary"
                        sx={{
                            '& .MuiSlider-valueLabel': {
                                lineHeight: 1.2,
                                fontSize: 11,
                                fontWeight: 700,
                                background: 'unset',
                                padding: 0,
                                width: 34,
                                height: 34,
                                borderRadius: '50% 50% 50% 0',
                                backgroundColor: '#de333faa',
                                transformOrigin: 'bottom left',
                                transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                                '&:before': { display: 'none' },
                                '&.MuiSlider-valueLabelOpen': {
                                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                                },
                                '& > *': {
                                transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    />
                </div>
            </ThemeProvider>
        )
    }
  }

export default PrizeSlider;