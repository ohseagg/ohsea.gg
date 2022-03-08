import * as React from "react"
import  { useRef } from "react"
// import emailjs from '@emailjs/browser';
import { Formik, Field, Form  } from 'formik'

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

class Contact extends React.Component {
    render() {
        return(
            <Layout>
                <Seo title="Contact" />
                <div className="plain-dark-bg">
                    <div className="container-contact">
                        <div className="left">
                            
                        </div>
                        <div className="right">
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                            >
                            <Form>
                                <div className="form-wrapper">
                                    <div className="input-field">
                                        <label htmlFor="email">Your email address</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="student@ohsea.gg"
                                            type="email"
                                            as="input"
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="subject">How can we help?</label>
                                        <Field id="subject" name="subject" placeholder="Your Message" as="textarea"/>
                                    </div>
                                    <button type="submit" className="btn-fill">Submit</button>
                                </div>
                            </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
