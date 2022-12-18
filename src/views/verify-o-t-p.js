import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './verify-o-t-p.css'

const VerifyOTP = (props) => {
  return (
    <div className="verify-o-t-p-container">
      <Helmet>
        <title>Verify-OTP - Planical modern template</title>
        <meta
          property="og:title"
          content="Verify-OTP - Planical modern template"
        />
      </Helmet>
      <section className="verify-o-t-p-section">
        <div className="verify-o-t-p-hero">
          <div className="verify-o-t-p-content">
            <main className="verify-o-t-p-main">
              <img
                alt="image"
                src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg"
                className="verify-o-t-p-image"
              />
              <header className="verify-o-t-p-header">
                <h1 className="verify-o-t-p-heading">Dr.Test Q UP</h1>
                <span className="verify-o-t-p-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
                <input
                  type="number"
                  name="OTP"
                  required
                  autoFocus
                  placeholder="Enter OTP"
                  autoComplete="on"
                  className="verify-o-t-p-textinput input"
                />
              </header>
              <div className="verify-o-t-p-buttons">
                <Link to="/sign-up" className="verify-o-t-p-navlink">
                  <div className="verify-o-t-p-get-started button">
                    <span className="verify-o-t-p-text">
                      <span>Verify</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </div>
              <span className="verify-o-t-p-caption1">Powered by Q UP</span>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyOTP
