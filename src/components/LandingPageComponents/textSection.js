import React from 'react'
import '../../styles/style.scss'
import { Link } from "gatsby"
import { GoChevronRight } from 'react-icons/go'

const TextSection = () => {
    return (
        <div className="text-section">
        <div className="section top-sect">
            <div className="medium-header">Join Our Community</div>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="link-container">
            <a href="https://discord.com/invite/zWc8fymdrG" target="_blank" className="red-text" >
                Join Discord Server <GoChevronRight className="chevron-link"/>
            </a>
            </div>
        </div>
        <div className="section">
            <div className="medium-header">Bring Esports To Your School</div>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="link-container">
            <Link to="/" className="red-text" >
                Contact Us <GoChevronRight className="chevron-link"/>
            </Link>
            </div>
        </div>
        </div>
    )
}

export default TextSection