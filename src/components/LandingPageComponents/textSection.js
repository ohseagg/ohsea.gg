import React from 'react'
import '../../styles/style.scss'
import { GoChevronRight } from 'react-icons/go'

const TextSection = () => {
    return (
        <div className="text-section">
        <div className="section top-sect">
            <div className="medium-header">Join Our Community</div>
            <div className="text">Whether you're a student looking to play in our tournaments or an educator interested in esports, join our exclusive discord to stay up to date on all things OHSEA.</div>
            <div className="link-container">
            <a href="https://discord.com/invite/zWc8fymdrG" target="_blank" className="red-text" >
                Join Discord Server <GoChevronRight className="chevron-link"/>
            </a>
            </div>
        </div>
        <div className="section">
            <div className="medium-header">Bring Esports To Your School</div>
            <div className="text">Interested in starting an Esports club or implementing gaming within the classroom? We can help.</div>
            <div className="link-container">
            <a href="https://www.instagram.com/ohseagg/?hl=en" target="_blank" className="red-text">
                Contact Us <GoChevronRight className="chevron-link"/>
            </a>
            </div>
        </div>
        </div>
    )
}

export default TextSection