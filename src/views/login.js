import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Planical modern template</title>
        <meta property="og:title" content="Login - Planical modern template" />
      </Helmet>
      <section className="login-section">
        <div className="login-hero">
          <div className="login-content">
            <main className="login-main">
              <img
                alt="image"
                src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg"
                className="login-image"
              />
              <header className="login-header">
                <h1 className="login-heading">Dr.Test Q UP</h1>
                <span className="login-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
                <input
                  type="number"
                  name="Mobile number"
                  required
                  autoFocus
                  placeholder="Mobile number"
                  autoComplete="on"
                  className="login-textinput input"
                />
              </header>
              <div className="login-buttons">
                <Link to="/verify-o-t-p" className="login-navlink">
                  <div className="login-get-started button">
                    <span className="login-text">
                      <span>Send OTP</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </div>
              <span className="login-caption1">Powered by Q UP</span>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
