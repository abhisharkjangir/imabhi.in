import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button} from 'react-bootstrap'
import abhi from './abhi.jpg'
export const Intro = (props) => (
  <div id="about" className='intro-screen'>
    <div className='container'>
      <div className='col-xs-12 col-sm-5 col-md-5 col-lg-5'>
        <img className='img-responsive' src={abhi} />
      </div>
      <div className='col-xs-12 col-sm-7 col-md-7 col-lg-7'>
        <h2>Hello! I'm <span className="theme-color"> ABHISHAR JANGIR</span></h2>
        <p>I am a Gurugram(India) based Front End Developer, having 2 years of professional experience in the web development.</p>
        <br/>
        <p>Currently, I'm working as a UI Engineer with a service based organization in Gurugram, India.</p>
        <br/>
        <p>I design & develop websites in latest technologies. I specialize in front-end development, and sometimes I also works on back-end technology (NodeJs).</p>
        <br/>
        <p>And currently I'm in 💖 love with Javascript.</p>
        <br/>
        {/* <Button href="./ABHISHAR JANGIR FRONT END DEVELOPER.pdf" bsStyle="primary" bsSize="large" className="theme-btn-fill">Grab a Resume copy</Button> */}
        <Button bsStyle="primary" bsSize="large" className="theme-btn" onClick={() => props.gotoanchorfn('resume')}>Hire Me</Button>
      </div>
    </div>
  </div>

)

export default Intro
