import React from 'react'
import {Button} from 'react-bootstrap'
export const Resume = (props) => (
  <div id="resume" className='resume-screen'>
    <div className="container">
      <div className="row">
        <h3 className="text-center">Checkout my Resume</h3>
        <a href='https://s3.us-east-2.amazonaws.com/imabhi.in/resume.pdf' className="theme-btn-fill" download> <i className="fa fa-cloud-download" aria-hidden="true"></i> Grab a Copy</a>
      </div>
    </div>
  </div>
)

export default Resume
