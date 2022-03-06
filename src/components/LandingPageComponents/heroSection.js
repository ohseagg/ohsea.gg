import * as React from "react"
import { Link } from "gatsby"
import "../../styles/style.scss"

export default function HeroSection() {
    return (
        <div className="hero-section">
            <div className="left">
                <h1 className="large-header">
                    BRINGING <span className="red-text large-header">ESPORTS</span> TO HIGH SCHOOLS IN ONTARIO
                </h1>
                <h3 className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                </h3>
                <Link to='/events' style={{textDecoration: 'none'}}>
                    <div>
                        <div className="btn-fill">Get Started</div>
                    </div>
                </Link>
            </div>
            <div className="right">
                <div className="img-rotate">
                    <img src={require('../../images/Display.png').default} alt="Display"/>
                </div>
            </div>
        </div>
    )
}