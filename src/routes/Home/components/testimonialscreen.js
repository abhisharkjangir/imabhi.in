import React from 'react'
import {Button,Carousel} from 'react-bootstrap'
import bg from './testimonialbg.jpg'
export const Testimonial = (props) => (
  <div className='testimonial-screen'>
    <div className="container">
      <div className="row">
        <Carousel pauseOnHover={true} controls={true} >
          <Carousel.Item>
            <img height={300} className="img-responsive" src={bg}/>
            <Carousel.Caption>
              {/* <img className='img-responsive img-circle' width="100" height="100" src='http://programmerhasan.com/demos/shine/shine/assets/img/author.jpg' /> */}
              <h4>Ankit Bhanger</h4>
              <p>Product Manager at ABCplusD</p>
              <blockquote>There is one word that describes Abhishar - Commitment. His commitment towards his work is his strongest skill.
                And he does not do that because he has to, he does it because he wants to. Abhishar can handle multiple projects at once and one can always have an out of the box discussion with him. Abhishar is a real keeper.</blockquote>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={300} className="img-responsive" src={bg}/>
            <Carousel.Caption>
              {/* <img className='img-responsive img-circle' width="100" height="100" src='http://programmerhasan.com/demos/shine/shine/assets/img/author.jpg' /> */}
              <h4>Madhav Shankar</h4>
              <p>Product Manager at Medzin</p>
              <blockquote>Abhishar has wonderful implementation skills in terms of front end engineering , he has played a vital role in developing UI and UX for Medzin.</blockquote>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </div>
)

export default Testimonial
