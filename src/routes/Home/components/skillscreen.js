import React from 'react'
import {IndexLink, Link} from 'react-router'
import Skillcard from './skillcard'

export const Skills = () => (
  <div className='skill-screen'>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="HTML/HTML5" percent="90" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="CSS/CSS3/SASS" percent="80" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="JAVASCRIPT/ES6" percent="75" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="BOOTSTRAP 4" percent="90" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="ANGULAR JS 1" percent="80" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="REACT/REDUX" percent="70" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="NODE JS" percent="65" />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-4 col-xs-6">
          <Skillcard name="JQUERY" percent="70" />
        </div>
      </div>
    </div>
  </div>
)

export default Skills
