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
      <h1>
        BRINGING <span className="red-text">E-SPORTS</span> TO HIGH SCHOOLS ACROSS ONTARIO
      </h1>
      <div className="hero-img">

      </div>
    </div>
  </Layout>
)

export default IndexPage
