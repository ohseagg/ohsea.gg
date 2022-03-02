import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { GoChevronRight } from 'react-icons/go';
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

import HeroSection from "../components/LandingPageComponents/heroSection"
import LargeEvent from "../components/LandingPageComponents/largeEvent"
//import SmallEvent from "../components/LandingPageComponents/smallEvent"
import TextSection from "../components/LandingPageComponents/textSection"
import AboutSnippet from "../components/LandingPageComponents/aboutSnippet";

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
    <TextSection />

    <div className="dark-bg-container-2">
      <div className="dark-bg"></div>
    </div>

    <AboutSnippet />
    {/* <div className="about-wrapper">
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
      </div>
    </div> */}
    
  </Layout>
)

export default IndexPage
