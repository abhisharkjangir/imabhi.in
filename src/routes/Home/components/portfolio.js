import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button,FormGroup,ControlLabel,FormControl,FieldGroup,Form,Col } from 'react-bootstrap'
import FontAwesome  from 'react-fontawesome'
import meuzic from './meuzic.png';
import wordbook from './wordbook.png';
import ie from './ie.png';
import iss from './iss.png';
import nasa from './nasa.png'

export const Contact = (props) => (
  <div id="portfolio" className='portfolio-screen'>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">personal projects.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="project-list">
            <div className="project-item">
              <a href="https://meuzic.com" target="_blank"><img clasasName="cursor" src={meuzic} width={150}/></a>
            </div>
            <div className="project-item">
              <a href="http://wordbook.imabhi.in" target="_blank"><img src={wordbook} width={150}/></a>
            </div>
            <div className="project-item">
              <a href="http://iss.imabhi.in" target="_blank"><img src={iss} width={150}/></a>
            </div>
            <div className="project-item">
              <a href="http://nasa.imabhi.in" target="_blank"><img src={nasa} width={150}/></a>
            </div>
            <div className="project-item">
              <a href="http://ie.imabhi.in" target="_blank"><img src={ie} width={150}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
