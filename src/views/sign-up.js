import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>SignUp - Planical modern template</title>
        <meta property="og:title" content="SignUp - Planical modern template" />
      </Helmet>
      <section className="sign-up-section">
        <div className="sign-up-hero">
          <div className="sign-up-content">
            <main className="sign-up-main">
              <img
                alt="image"
                src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg"
                className="sign-up-image"
              />
              <header className="sign-up-header">
                <h1 className="sign-up-heading">Dr.Test Q UP</h1>
                <span className="sign-up-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
                <input
                  type="text"
                  name="First Name"
                  required
                  autoFocus
                  placeholder="First Name"
                  autoComplete="on"
                  className="sign-up-textinput input"
                />
                <input
                  type="text"
                  name="Last Name"
                  required
                  placeholder="Last Name"
                  autoComplete="on"
                  className="sign-up-textinput1 input"
                />
              </header>
              <div className="sign-up-buttons">
                <Link to="/booking-screen" className="sign-up-navlink">
                  <div className="sign-up-get-started button">
                    <span className="sign-up-text">
                      <span>Next</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </div>
              <span className="sign-up-caption1">Powered by Q UP</span>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
