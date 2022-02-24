import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GoChevronRight } from 'react-icons/go';
import  "../styles/style.scss"

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"
import LargeEvent from "../components/LandingPageComponents/largeEvent"
import SmallEvent from "../components/LandingPageComponents/smallEvent"

const IndexPage = () => (
  <Layout className="index-layout">
    <Seo title="Home" />
    <div className="dark-bg">
      <div className="hero-section">
        <div className="left">
          <h1 className="large-header">
            BRINGING <span className="red-text large-header">ESPORTS</span> TO HIGH SCHOOLS IN ONTARIO
          </h1>
          <h3 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </h3>
          <div>
            <div className="btn-fill">Get Started</div>
          </div>
        </div>
        <div className="right">
          <img src={require('../images/TestDisplay.png').default} alt="test display img"/>
        </div>
      </div>
      <div className="events-section">
        <div className="medium-header">Upcoming Events</div>
        <div className="events">
          <LargeEvent/>
          <LargeEvent/>
        </div>

        {/* 
        components below are for smaller (monthly random games , etc.) events
           - not needed right now
        */}

        {/* <div className="events s-events">
          <SmallEvent/>
          <SmallEvent/>
          <div className="last-s-event">
            <SmallEvent/>
          </div>
        </div>
        <Link to="/" className="subtitle red-text" >
          See More <GoChevronRight className="chevron-link"/>
        </Link> */}


      </div>
    </div>
  </Layout>
)

export default IndexPage
