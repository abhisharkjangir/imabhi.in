import React from 'react'
import {IndexLink, Link} from 'react-router'

export const Landingscreen = (props) => (
  <div id="home" className='landing-screen-wrapper landing-screen'>
    <div className='landing-content'>
      <p>i am a Gurugram(India) based</p>
      <h3 id="text" className={props.fade}>{props.text}</h3>
      <div id="section10">
        <a >
          <span onClick={() => props.gotoanchorfn('about')}></span>
        </a>
      </div>
    </div>
  </div>
)

export default Landingscreen
