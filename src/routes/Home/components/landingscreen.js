import React from 'react'
import {IndexLink, Link} from 'react-router'

export const Landingscreen = (props) => (
  <div id="home" className='landing-screen-wrapper landing-screen'>
    <div className='landing-content '>
      <p clasasName="animate-bottom">Hello, I'm Abhishar Jangir</p>
      {props.text && <h3 id="text">{props.text}</h3>}
      <b clasasName="animate-bottom">based in Gurugram, 🇮🇳 India.</b>
      <div id="section10">
        <a>
          <span onClick={() => props.gotoanchorfn('about')}></span>
        </a>
      </div>
    </div>
  </div>
)

export default Landingscreen
