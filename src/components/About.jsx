import React from 'react';

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div className="container">
        <div className="profile-picture about-col"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src="./images/profile-square.jpg" />
        </div>
        <div className="about-desc about-col"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h4>Hello, I'm Kelly!</h4>
          <p>Bay Area software developer who specializes in Javascript,
          React, Node.js, MySQL, and MongoDB. I love being around creative and
          goal-oriented people, and enthusiastic about team collaboration and
          building intuitive web applications that deliver impactful user
          experiences. </p>
          <p>When I'm not coding, you can find me trying to find the latest dessert places,
          eating anything that are carbs (bread & fries especially),
          working out at Barry's, and visiting the latest interactive pop-up museums. </p>
          <p> Feel free to reach out, I'd love to chat! </p>
          <div className="contact-button">
            <a href="mailto:kellyhudiono@gmail.com" target="_blank">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
