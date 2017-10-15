import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button} from 'react-bootstrap'
import Specilitycard from './specialitycard'
import responsive from './responsive.png'
import thirdparty from './thirdparty.png'
import documented from './documented.png'
import framework from './framwork.png'
export const Speciality = () => (
  <div id='whatido' className='speciality-screen'>
    <div className='container'>
      <div className="heading">what i do.</div>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <Specilitycard name="RESPONSIVE DESIGN" desc="I can design and develop a fully responsive website for different size devices (i.e Desktop, Tablet, Mobile)." img={responsive}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <Specilitycard name="DOCUMENTED CODE" desc="I believe that code should be wrriten in a such manner that another developer can easily understand it." img={documented}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <Specilitycard name="THIRD PARTY INTEGRATION" desc="I have experience of integrating third party tools or libraries such as Branch, Adobe Creative SDK etc, Fine S3 Uploader etc." img={thirdparty}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          {/* <Specilitycard name="UI FRAMEWORKS" desc="I am familiar in using several frameworks like Bootstrap, Angular Material, Materialize CSS etc." img="http://imabhi.in/img/framwork.png"/> */}
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <Specilitycard name="UI FRAMEWORKS" desc="I am familiar in using several frameworks like Bootstrap, Angular Material, Materialize CSS etc." img={framework}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          {/* <Specilitycard name="Web Design" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " img="http://programmerhasan.com/demos/shine/shine/assets/img/author.jpg"/> */}
        </div>
      </div>
    </div>
  </div>
)

export default Speciality
