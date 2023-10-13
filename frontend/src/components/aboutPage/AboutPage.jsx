import React from 'react';
import './AboutPage.css'; // Import your custom CSS file

import VideoBackground from './vedioBG'

const AboutPage = () => {
  return (
    <div className="about-container-IMG">

    <div className="about-container">
    {/* <VideoBackground/> */}
      <div className="about-content">
        <div className="about-text">
          <h1>About A.R. Real Estate</h1>
          <p>
            Explore A.R. Real Estate, your gateway to exquisite properties. From luxurious villas to elegant apartments, we offer a tailored real estate experience to help you find your dream home.
          </p>
        </div>
        <div className="about-contact">
          <h2>Contacts</h2>
          <p>
            Phone: +97143940788<br />
            YouTube: YARTEK Contracting LLC<br />
            Linkedin: YARTEK Contracting LLC
          </p>
        </div>
        <div className="about-location">
          <h2>Location</h2>
          <p>
            Continent: United Arab Emirates<br />
            Country: Dubai<br />
            Current Location: Business Bay - Dubai
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={"https://res.cloudinary.com/dh1lgpmm4/image/upload/v1694983534/AlaaProjects/ARREALSTATE/Logo_vmlkrd.png"} alt="A.R. Real Estate" />
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
