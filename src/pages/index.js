import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { GoChevronRight } from 'react-icons/go';
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

import HeroSection from "../components/LandingPageComponents/heroSection"
import LargeEvent from "../components/LandingPageComponents/largeEvent"
//import SmallEvent from "../components/LandingPageComponents/smallEvent"
// import AboutSnippet from "../components/LandingPageComponents/aboutSnippet/aboutSnippet";

import data from "../data/landingEventData"
import  "../styles/style.scss"

const IndexPage = () => (
  <Layout className="index-layout">
    <Seo title="Home" />
    <div className="dark-bg">
      <HeroSection />
      <div className="events-section">
        <div className="medium-header">Upcoming Events</div>
        <div className="events">
          <LargeEvent data={data.LgEvent1}/>
          <LargeEvent data={data.LgEvent2}/>
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

    {/* <AboutSnippet/> */}

    <div className="text-section">
      <div className="section">
        <div className="header">Join Our Community</div>
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="link-container">
          <a href="https://discord.com/invite/zWc8fymdrG" target="_blank" className="red-text" >
            Join Discord Server <GoChevronRight className="chevron-link"/>
          </a>
        </div>
      </div>
      <div className="section">
        <div className="header">Bring Esports To Your School</div>
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="link-container">
          <Link to="/" className="red-text" >
            Contact Us <GoChevronRight className="chevron-link"/>
          </Link>
        </div>
      </div>
    </div>

    <div className="dark-bg-container-2">
      <div className="dark-bg">
        <div className="about-snippet-container">
          <div className="medium-header"><span className="red-text">Esports</span> In High School</div>
          {/* todo add abbreviated version of kenny's about page component */}
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
