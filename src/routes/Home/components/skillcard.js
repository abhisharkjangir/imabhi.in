import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';
export const Skillcard = (props) => (
  <div className='skill-card'>
    <CircularProgressbar percentage={props.percent} initialAnimation={true} strokeWidth={2}/>
    <p className="skill-name">{props.name}</p>
  </div>
)

export default Skillcard
