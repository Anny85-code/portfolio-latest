import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              {/* My name is <b>SACHIN MITTAL</b> and I am currently working as{' '}
              <b>Software Developer Engineer</b> at
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://www.springworks.in/'>
                  Springworks
                </a>
              </b>
              . I completed my degree in Bachelor of Technology in Computer Science and Engineering
              from Sant Longowal Institute of Engineering and Technology. I am much interested in
              developing new things which excite me a lot. :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular. */}
              I'm a Full-Stack Developer with high level of experience in web designing and development,
              maintain the databases, and handle backend operations of the application, and ensure
              an error-free development testing and deploying the application as well.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
