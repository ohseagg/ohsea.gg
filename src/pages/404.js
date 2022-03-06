import * as React from "react"
import { GoChevronRight } from 'react-icons/go';
import { Link } from "gatsby"
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <div className="plain-dark-bg">
      <div className="container-404">
        <h3>Sorry, this page doesn't exist.</h3>
        <Link to='/' className="red-text" >
            Back To Home <GoChevronRight className="chevron-link"/>
        </Link>
        <p>
          Can't find something?
        </p>
        <Link to='/contact' className="red-text" >
            Contact Us <GoChevronRight className="chevron-link"/>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
