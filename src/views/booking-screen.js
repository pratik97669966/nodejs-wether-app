import React from 'react'

import { Helmet } from 'react-helmet'

import './booking-screen.css'
const BookingScreen = (props) => {
var retrievedObject = localStorage.getItem('UserData');
const [doctor, setDoctor] = React.useState("");
var userData = JSON.parse(retrievedObject);
  var drId =localStorage.getItem('drId');
  var drName =localStorage.getItem('drName');
  var specality =localStorage.getItem('specality');
  var photourl="http://68.183.83.230:8765/provider-service/doctor/" + drId+ "/photo"
 
  const getDoctordetailsById = async () => {
      const payload = {
      firstName: finalFirstName,
      lastName: finalLastName,
      mobileNumber: mobileNumber,
      requestedRole:"PATIENT",
      preferredLanguageId:"5ad887231fd47a000d03368d"
      }
      const responce = await axios({
        method: "post",
        // url: `https://api.qupdev.com/provider-service/doctor/by-id/`+drId,
        url: `http://68.183.83.230:8765/provider-service/doctor/by-id/`+drId,
        data: payload,
        headers: {
          "Content-Type": "application/json",
           'Authorization': 'Basic '+btoa('qup-mobile:mob@46$qup'),
        },
      }).then((responce) => {      
        setDoctor(responce.data)
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log("Error api status",error.response.status);
          console.log("ERROR",error.responce)
          alert("Something Went Wrong Try Again")
        
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
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
                    src={photourl}
                    className="booking-screen-avatar"
                  />
                  <div className="booking-screen-details">
                    <h1 className="booking-screen-author1">{drName}</h1>
                    <label className="booking-screen-position">
                      {specality}
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
