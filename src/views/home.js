import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <img
                alt="image"
                src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg"
                className="home-image"
              />
              <header className="home-header">
                <h1 className="home-heading">Dr.Test Q UP</h1>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </header>
              <div className="home-buttons">
                <Link to="/login" className="home-navlink">
                  <div className="home-get-started button">
                    <span className="home-text">Proceed  for booking</span>
                  </div>
                </Link>
              </div>
              <span className="home-caption1">Powered by Q UP</span>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
