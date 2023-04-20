import React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <h1 className="title is-1">Contact Me</h1>
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
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me" />

export default ContactPage
