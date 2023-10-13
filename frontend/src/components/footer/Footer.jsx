import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>A.R. Real Estate</h2>
          <p>
          Explore A.R Real Estate, your gateway to exquisite properties. From luxurious villas to elegant apartments, we offer a tailored real estate experience to help you find your dream home.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +97143940788</span>
          <span>YouTube: YARTEK Contracting LLC</span>
          <span>Linkedin: YARTEK Contracting LLC</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: United Arab Emirates</span>
          <span>Country: Dubai</span>
          <span>Current Location: Business Bay - Dubai</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer