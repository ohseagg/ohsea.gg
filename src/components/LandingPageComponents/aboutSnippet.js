import React from 'react'
import '../../styles/style.scss'
import { Link } from "gatsby"
import { GoChevronRight } from 'react-icons/go'

const AboutSnippet = () => {
    return(
        <div className="about-wrapper">
            <div className="about-container">
                <div className="medium-header"><span className="red-text">Esports</span> In High School</div>
                <div className="text-wrapper">
                    <div className="subtitle">Subtitle 1</div>
                    <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="subtitle">Subtitle 2</div>
                    <div className="text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="subtitle">Subtitle 3</div>
                    <div className="text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="link-container">
                    <Link to="/" className="red-text" >
                        Learn More <GoChevronRight className="chevron-link"/>
                    </Link>
                    </div>
                </div>
                <div className="display-img">

                </div>
            </div>
        </div>
    )
}

export default AboutSnippet