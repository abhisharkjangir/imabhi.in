import React from 'react'

export const Experiencecard = (props) => (
  <div className='experience-card'>
    <h4>{props.companyName}</h4>
    <p className="exp-desc">{props.desc}</p>
    <p className="exp-time">TIME PERIOD: {props.time}</p>
    <p className="exp-projects">PROJECTS: {props.projects}</p>
  </div>
)

export default Experiencecard
