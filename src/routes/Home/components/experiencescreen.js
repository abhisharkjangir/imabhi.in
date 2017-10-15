import React from 'react'
import Experiencecard from './experiencecard'

export const Experiencescreen = (props) => (
  <div id="experience" className='experience-screen'>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>experience.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Experiencecard companyName="MEADHEALIX HEALTH TECH PVT LTD." desc="I have worked on medzin website and medzin dashboard as front end developer and also worked on app design." time="15th Nov, 2015 to 30th Jun, 2016" projects="Medzin Website, Medzin Dashboard and Medzin App Design"/>
        </div>
        <div className="col-md-6">
          <Experiencecard companyName="ABCPLUSD(A Chimes Group Company)" desc="i am currently working in abcplusd, as front end developer and working on dauble collector, dauble business website, dauble admin dashboard and pipetrak app." time="8th Aug, 2016 to Present" projects="Dauble Collector, Dauble Business, Dauble Admin and PipeTrak."/>
        </div>
      </div>
    </div>
  </div>
)

export default Experiencescreen
