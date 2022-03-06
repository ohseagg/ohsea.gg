import * as React from "react"

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

class Contact extends React.Component {
    render() {
        return(
            <Layout>
                <Seo title="Contact" />
                <div className="plain-dark-bg">
                    <div className="container-contact">
                        
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
