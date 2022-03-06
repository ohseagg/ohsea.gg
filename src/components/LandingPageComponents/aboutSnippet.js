import React from 'react'
import '../../styles/style.scss'
import { Link } from "gatsby"
import { GoChevronRight } from 'react-icons/go'

const AboutSnippet = () => {
    return(
        <div className="about-wrapper">
            <div className="about-container">
                <div className="medium-header"><span className="red-text">Esports</span> In High School</div>
                <div className="about-content">
                    <div className="text-wrapper">
                        <div className="subtitle">Subtitle 1</div>
                        <div className="text">
                        OHSEA, also known as the Ontario High School Esports Association, is an organization founded by students who were frustrated by the lack of school support for gaming and esports in Canada, despite it being one of the fastest growing industries worldwide.
                        </div>
                        <div className="subtitle">Subtitle 2</div>
                        <div className="text">
                        Esports is competitive gaming, which spans everything from players to business owners, designers, content creators, product designers, managers, coaches and more. Being a part of esports is much more than being good at a game.
                        </div>
                        <div className="subtitle">Subtitle 3</div>
                        <div className="text">
                        We run competitive community tournaments for Ontario High School students and clubs with an emphasis on safety and sportsmanship. We don't tolerate toxicity and value student experience above all. In the future, we plan to integrate with the school environment by running school leagues, supporting clubs, and working with educators across the province.
                        </div>
                        <div className="link-container">
                        <Link to="/" className="red-text" >
                            Learn More <GoChevronRight className="chevron-link"/>
                        </Link>
                        </div>
                    </div>
                    <div className="display-wrapper">
                        <img 
                        className="display-img" 
                        src={require('../../images/LogoLarge.png').default} 
                        alt="OHSEA LOGO" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSnippet