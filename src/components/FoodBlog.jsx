import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import photos from './data';

class FoodBlog extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div>
        <div className="nav-personal nav-bar-color">
          <ul>
            <li><Link to={'./'}><i className="fas fa-angle-double-left"></i> Go Back Home</Link></li>
          </ul>
        </div>
        <div id="personal">
          <h2>Food Blog</h2>
          <div className="blog">
            <h3>No blog posts yet! Check out the places I've been to on
              <a href="https://khudiono.yelp.com" target="_blank" className="yelp-profile"> Yelp </a>
              & <a href="https://www.google.com/maps/contrib/109759262869891628269/reviews/@39.5267554,-123.2595642,5z/data=!3m1!4b1!4m3!8m2!3m1!1e1"
                  target="_blank"
                  className="google-profile">
                  Google Places
                </a>!
            </h3>
            <div className="blog-photos">
              <LazyLoad>
                <div className="blog-photo-row-1">
                  {photos.slice(0,4).map( photo => {
                    return (
                      <a href={photo.link} target="_blank" key={photo.link}>
                        <img src={photo.photo}/>
                      </a>
                    )
                  })}
                </div>
              </LazyLoad>
                <div className="blog-photo-row-2">
                <LazyLoad>
                  {photos.slice(4,9).map( photo => {
                    return (
                      <a href={photo.link} target="_blank" key={photo.link}>
                        <img src={photo.photo}/>
                      </a>
                    )
                  })}
                </LazyLoad>
                <LazyLoad>
                  {photos.slice(9).map( photo => {
                    return (
                      <a href={photo.link} target="_blank" key={photo.link}>
                        <img src={photo.photo}/>
                      </a>
                    )
                  })}
                </LazyLoad>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FoodBlog;
