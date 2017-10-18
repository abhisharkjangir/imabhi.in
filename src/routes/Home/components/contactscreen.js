import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button,FormGroup,ControlLabel,FormControl,FieldGroup,Form,Col } from 'react-bootstrap'

export const Contact = (props) => (
  <div id="contact" className='contact-screen'>
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">get in touch.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-form">
            <input type="text" name="name" value={props.statedata.name} className="input-box" placeholder="Enter Your Good Name *" onChange={props.updateform}/>
            <input type="email" name="email" value={props.statedata.email} className="input-box" placeholder="Enter Your Email Address *" onChange={props.updateform} required/>
            <textarea rows="4" name="msg" value={props.statedata.msg} cols="50" placeholder="Enter Your Message/Query *" className="textarea-box" onChange={props.updateform}></textarea>
            <Button bsStyle="primary" bsSize="large" className="theme-btn" block onClick={props.sendQuery}
              disabled={!props.statedata.btn} ><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</Button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-details">
            <h5>My location : </h5>
            Sector 44, Gurugram, India
            <h5>Mobile : </h5>
            +91 8824299966
            <h5>Email : </h5>
            <a href="mailto:abhisharjangir@ymail.com">abhisharjangir@ymail.com</a>
          </div>
          <div className="contact-details">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/abhishar-jangir/"><i className="fa fa-linkedin linkedin"></i></a></li>
              <li><a href="https://github.com/abhisharkjangir"><i className="fa fa-github github"></i></a></li>
              <li><a href="https://www.facebook.com/imabhi.in"><i className="fa fa-facebook facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
