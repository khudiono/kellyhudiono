import React from 'react';
import LazyLoad from 'react-lazyload';

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <a href="https://github.com/khudiono" target="_blank">
          <div className="project-button"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="2000">
              VIEW MORE PROJECTS
          </div>
          </a>
        </div>
        <LazyLoad>
        <div className="project-display">
          <a href="https://github.com/khudiono/react-native-weather-app">
            <img className="weather-demo"
              src="./images/weather-app.gif"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="2000"
              />
          </a>
          <a href="https://github.com/khudiono/Boba-Buddies">
            <img className="mac"
              className="boba-display-1"
              src="./images/boba-1.png"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="2000"
            />
          </a>
          <a href="https://github.com/khudiono/Boba-Buddies">
            <img className="boba-display-2"
              src="./images/boba-2.png"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="2000"
            />
          </a>
        </div>
      </LazyLoad>
    </div>
  )
}

export default Projects;
