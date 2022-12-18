import React from 'react'

import { Helmet } from 'react-helmet'

import './booking-screen.css'

const BookingScreen = (props) => {
  var drId =localStorage.getItem('drId');
  var drName =localStorage.getItem('drName');
  return (
    <div className="booking-screen-container">
      <Helmet>
        <title>Booking-Screen - Planical modern template</title>
        <meta
          property="og:title"
          content="Booking-Screen - Planical modern template"
        />
      </Helmet>
      <section className="booking-screen-section">
        <div className="booking-screen-hero">
          <div className="booking-screen-content">
            <main className="booking-screen-main">
              <header className="booking-screen-header">
                <div className="booking-screen-author">
                  <img
                    alt="image"
                    src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg"
                    className="booking-screen-avatar"
                  />
                  <div className="booking-screen-details">
                    <h1 className="booking-screen-author1">{drName}</h1>
                    <label className="booking-screen-position">
                      {drId}
                    </label>
                    <div className="booking-screen-author2">
                      <a
                        href="https://goo.gl/maps/p774Cx2B6XB6zb2h6"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="booking-screen-link"
                      >
                        <div className="booking-screen-author3">
                          <img
                            alt="image"
                            src="https://www.pngall.com/wp-content/uploads/9/Location-PNG-Clipart.png"
                            className="booking-screen-image"
                          />
                          <label className="booking-screen-position1">
                            Pune
                          </label>
                        </div>
                      </a>
                      <a href="tel:9766996640" className="booking-screen-link1">
                        <div className="booking-screen-author4">
                          <img
                            alt="image"
                            src="https://www.pngmart.com/files/22/Phone-Icon-PNG-Transparent.png"
                            className="booking-screen-image1"
                          />
                          <label className="booking-screen-position2">
                            Contact
                          </label>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </header>
            </main>
          </div>
        </div>
      </section>
      <section className="booking-screen-section1">
        <div className="booking-screen-hero1">
          <div className="booking-screen-content1">
            <main className="booking-screen-main1">
              <header className="booking-screen-header1">
                <h1 className="booking-screen-author5">Select queue to join</h1>
              </header>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookingScreen
