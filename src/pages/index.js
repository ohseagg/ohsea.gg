import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainNav from '../components/MainNav'
import  "../styles/style.scss"

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainNav/>
    <div className="hero-section">
      <div className="left">
        <h1>
          BRINGING <span className="red-text">E-SPORTS</span> TO HIGH SCHOOLS IN ONTARIO
        </h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        </h3>
        <div className="btns">
          <div>Get Started</div>
        </div>
      </div>
      <div className="hero-img">

      </div>
    </div>
  </Layout>
)

export default IndexPage
