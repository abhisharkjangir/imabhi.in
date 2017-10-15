import React, {Component} from 'react'
import './HomeView.scss'
import {IndexLink, Link} from 'react-router'
import Header from './header'
import Landingscreen from './landingscreen'
import Intro from './introscreen'
import Speciality from './specialityscreen'
import Skills from './skillscreen'
import Experience from './experiencescreen'
import Resume from './resumescreen'
import Testimonial from './testimonialscreen'
import Contact from './contactscreen'
// import $ from 'jquery';

const LANDING_TITLES = ['Javascript Developer', 'Front End Developer', 'Web Designer'];

class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      headerClass: 'transparent-header',
      activeMenu : 'home',
      landingText: LANDING_TITLES[0],
      goToTop : false
    }
    this.gotoAnchor = this.gotoAnchor.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({
        headerClass: window.scrollY > 250
          ? 'black-header'
          : 'transparent-header',
        goToTop : window.scrollY > 400? true : false

      })
    })
    this.textAnimator()
  }

  textAnimator() {
    let item = 1;
    setInterval(function() {
      if (item == LANDING_TITLES.length - 1)
        item = 0
      else
        item++
      this.setState({landingText: LANDING_TITLES[item]})
    }.bind(this), 3000);
  }

  gotoAnchor(anchor){
    let fake = this
    this.setState({activeMenu: anchor})
    document.getElementById(anchor).scrollIntoView({behavior: "smooth",block:"start"})
  }

  activateMenu(anchor){
    this.setState({activeMenu: anchor})
  }

  render() {
    return (
      <div>
        <Header active={this.state.activeMenu} hclass={this.state.headerClass} gotoanchorfn={this.gotoAnchor}/>
        <Landingscreen text={this.state.landingText} fade="fade-in"/>
        <Intro gotoanchorfn={this.gotoAnchor}/>
        <Speciality/>
        <Skills/>
        <Experience/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        {this.state.goToTop && <div className='go-to-top' onClick={() => this.gotoAnchor('home')}>
          <i  className="fa fa-angle-double-up"></i>
        </div>}
      </div>
    )
  }

}

export default HomeView
