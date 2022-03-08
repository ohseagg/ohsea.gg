import * as React from "react"
import  { useRef } from "react"
import emailjs from '@emailjs/browser';
import { Formik, Field, Form  } from 'formik'
import { RiErrorWarningLine } from 'react-icons/ri'

import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Your email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address.';
    }
    return error;
}
  
function validateMessage(value) {
    let error;
    if (value.length < 10) {
        error = 'Messge too short. Tell us more!';
    }
    return error;
}

class Contact extends React.Component {
    render() {
        const form = useRef()

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
                                email: '',
                                msg: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                            >
                            {({ errors, touched, isValidating }) => (
                                <Form>
                                    <div className="form-wrapper">
                                        <div className="input-field">
                                            <label htmlFor="email">Your email address</label>
                                            <Field
                                            id="email"
                                            name="email"
                                            placeholder="student@ohsea.gg"
                                            as="input"
                                            validate={validateEmail}
                                            />
                                            {errors.email && touched.email && 
                                            <div className="error"><RiErrorWarningLine className="warning-icon"/> {errors.email}</div>
                                            }
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="msg">How can we help?</label>
                                            <Field
                                            id="msg"
                                            name="msg"
                                            placeholder="Your Message"
                                            as="textarea"
                                            validate={validateMessage}
                                            />
                                            {errors.msg && touched.msg && 
                                            <div className="error"><RiErrorWarningLine className="warning-icon"/> {errors.msg}</div>
                                            }
                                        </div>
                                        <button 
                                        type="submit"
                                        className="btn-fill"
                                        >Send</button>
                                    </div>
                                </Form>
                            )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
