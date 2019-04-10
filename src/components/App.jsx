import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: ''
    }
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent)
  }

  scrollEvent(e) {
    if (window.scrollY > 300) {
      this.setState({nav: 'nav-bar-color'});
    }
    if (window.scrollY < 300) {
      this.setState({nav: ''});
    }
  }

  render() {
    return(
      <div>
        <div id="nav" className={this.state.nav}>
          <ul>
            <li><a href="#about"> About</a></li>
            <li><a href="#projects"> Projects</a></li>
            <li><a href="/khudiono-resume.pdf" target="_blank"> Resume</a></li>
            <li><Link to={'./foodblog'}>Food Blog</Link></li>
          </ul>
        </div>
        <Home />
        <About />
        <Projects />
      </div>
    )
  }
}

export default App;
