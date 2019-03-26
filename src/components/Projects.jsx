import React from 'react';
import LazyLoad from 'react-lazyload';

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="project-button"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="2000">
            <a href="https://github.com/khudiono"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="2000">
              VIEW MORE PROJECTS
            </a>
          </div>
        </div>
        <LazyLoad>
        <div className="project-display">
          <img className="weather-demo"
            src="./images/weather-app.gif"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="2000"
            />
          <img className="mac"
            className="boba-display-1"
            src="./images/boba-1.png"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="2000"
          />
          <img className="boba-display-2"
            src="./images/boba-2.png"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000"
          />
        </div>
      </LazyLoad>
    </div>
  )
}

export default Projects;
