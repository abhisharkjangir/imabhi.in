import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button} from 'react-bootstrap'

export const Specilitycard = (props) => (
  <div className='speciality-card'>
    <img src={props.img} className='img-responsive'/>
    <p className="card-heading">{props.name}</p>
    <p className="card-desc">{props.desc}</p>
  </div>
)

export default Specilitycard
