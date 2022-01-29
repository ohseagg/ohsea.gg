import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  "../styles/style.scss"

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero-section">
      <div className="left">
        <h1>
          BRINGING <span className="red-text">E-SPORTS</span> TO HIGH SCHOOLS ACROSS ONTARIO
        </h1>
        <h4>
          The Ontario High School E-Sports Association is ... ... ... ... ... ... ... test test test ... ... ... ... ... ...
        </h4>
        <div className="btns">
          <div className="btn1">Sign Up</div>
          <div className="btn2">Join Our Discord!</div>
        </div>
      </div>
      <div className="hero-img">

      </div>
    </div>
  </Layout>
)

export default IndexPage
