import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  "../styles/style.scss"

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

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
        <div className="medium-header">
          Upcoming Events
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
