import React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <div className="columns">
          <div className="column p-6 is-half">
            <h1 className="title">Contact Me</h1>
            <form
              id="fs-frm"
              name="simple-contact-form"
              acceptCharset="utf-8"
              action="https://formspree.io/f/mbjeqgrg"
              method="post"
            >
              <div className="field">
                <label htmlFor="full-name" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    className="input"
                    placeholder="First and Last"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email-address" className="label">
                  Email Address
                </label>
                <div className="control">
                  <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    className="input"
                    placeholder="you@email.com"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <div className="control">
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    className="textarea"
                    placeholder="Send me a message and I'll get back to you soon!"
                    required=""
                  ></textarea>
                </div>
              </div>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
              <div className="field">
                <div className="control">
                  <button type="submit" className="button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column p-6">
            <h1 className="title">Follow Me</h1>
            <p>
              Ut dolore in laborum officia laboris nisi. Nostrud do adipisicing
              mollit et occaecat officia ea ad. Est occaecat laboris tempor nisi
              sint. Ea commodo Lorem laborum aliquip consectetur nisi occaecat
              incididunt.
            </p>
            <p>
              Ut dolore in laborum officia laboris nisi. Nostrud do adipisicing
              mollit et occaecat officia ea ad. Est occaecat laboris tempor nisi
              sint. Ea commodo Lorem laborum aliquip consectetur nisi occaecat
              incididunt.
            </p>
            <p>
              Ut dolore in laborum officia laboris nisi. Nostrud do adipisicing
              mollit et occaecat officia ea ad. Est occaecat laboris tempor nisi
              sint. Ea commodo Lorem laborum aliquip consectetur nisi occaecat
              incididunt.
            </p>
            <p>
              Ut dolore in laborum officia laboris nisi. Nostrud do adipisicing
              mollit et occaecat officia ea ad. Est occaecat laboris tempor nisi
              sint. Ea commodo Lorem laborum aliquip consectetur nisi occaecat
              incididunt.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me" />

export default ContactPage
