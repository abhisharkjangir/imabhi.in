import React from 'react'
import {IndexLink, Link} from 'react-router'

export const Landingscreen = (props) => (
  <div id="home" className='landing-screen-wrapper landing-screen'>
    <div className='landing-content'>
      <p>i'm a Gurugram based</p>
      <h3 id="text" className={props.fade}>{props.text}</h3>
      <div id="section10">
        <a >
          <span></span>
        </a>
      </div>
    </div>
  </div>
)

export default Landingscreen
