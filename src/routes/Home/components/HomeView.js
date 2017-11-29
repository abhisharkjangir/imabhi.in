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
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
toastr.options.closeButton = true;
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeEasing = 'swing';
toastr.options.progressBar = true;

const LANDING_TITLES = ['Javascript Developer', 'Front End Developer', 'Web Designer'];

class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      headerClass: 'transparent-header',
      activeMenu : 'home',
      landingText: LANDING_TITLES[0],
      goToTop : false,
      name : undefined,
      email : undefined,
      msg  : undefined,
      btn : true
    }
    this.gotoAnchor = this.gotoAnchor.bind(this)
    this.updateForm = this.updateForm.bind(this)
    this.emailValidator = this.emailValidator.bind(this)
    this.sendContactQuery = this.sendContactQuery.bind(this)
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

  updateForm(e){
    let key = e.target.name
    this.setState({[key]: e.target.value.length > 0 ? e.target.value : undefined})
  }

  emailValidator(email){
    if (EMAIL_REGEX.test(email)) return true
    else return false
  }

  sendContactQuery(){
    let state = this.state
    if(state.name && state.email && this.emailValidator(state.email) && state.msg ){
      this.setState({btn : false})
      fetch('https://imabhi.herokuapp.com/contact',{method : 'post',body: JSON.stringify({name: state.name, email: state.email,query : state.msg})})
      .then(r => r.json())
      .then(r => {
        if(r.success){
          toastr.success(`Hello ${state.name}, your query is successfully submitted! I will contact you as soon as possible.`)
          this.setState({
            name : '',
            email : '',
            msg  : '',
            btn  :true
          })
        }else toastr.error('Something went wrong! Please try again later.')
      })
    }else toastr.error('All fields are mandatory!')
  }

  render() {
    return (
      <div>
        <Header active={this.state.activeMenu} hclass={this.state.headerClass} gotoanchorfn={this.gotoAnchor}/>
        <Landingscreen text={this.state.landingText} fade="fade-in" gotoanchorfn={this.gotoAnchor}/>
        <Intro gotoanchorfn={this.gotoAnchor}/>
        <Speciality/>
        <Skills/>
        <Experience/>
        <Resume/>
        <Testimonial/>
        <Contact sendQuery={this.sendContactQuery} updateform={this.updateForm} statedata={{name : this.state.name,email : this.state.email,msg : this.state.msg, btn : this.state.btn}}/>
        {this.state.goToTop && <div className='go-to-top' onClick={() => this.gotoAnchor('home')}>
          <i  className="fa fa-angle-double-up"></i>
        </div>}
      </div>
    )
  }
}

export default HomeView
