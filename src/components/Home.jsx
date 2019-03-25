import React from 'react';

const Home = () => {
  return (
    <div id="home">
      <h1> Kelly Hudiono </h1>
      <h3>Software Developer | Food Enthusiast </h3>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/khudiono/" target="_blank"><i className="fab fa-linkedin-in net-icon"></i></a>
        <a href="https://khudiono.yelp.com" target="_blank"><i className="fab fa-yelp net-icon"></i></a>
        <a href="https://github.com/khudiono" target="_blank"><i className="fab fa-github-alt net-icon"></i></a>
        <a href="mailto:kellyhudiono@gmail.com" target="_blank"><i className="far fa-envelope-open net-icon"></i></a>
      </div>
    </div>
  )
}

export default Home;
