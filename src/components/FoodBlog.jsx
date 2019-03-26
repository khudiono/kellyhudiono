import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const FoodBlog = () => {
  return(
    <div>
      <div id="nav">
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
                <a href="https://www.yelp.com/user_local_photos?select=CPPvVfjt9Ho_g2xxr5PxfQ&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/CPPvVfjt9Ho_g2xxr5PxfQ/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=CjzFO8rLStV9vNtOD5bI4Q&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/CjzFO8rLStV9vNtOD5bI4Q/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=NthMV0urbUc4CcHZkwjohw&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/NthMV0urbUc4CcHZkwjohw/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=KqmQE66Z1V7Oav7QKlmMvg&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/KqmQE66Z1V7Oav7QKlmMvg/o.jpg" />
                </a>
              </div>
            </LazyLoad>
              <div className="blog-photo-row-2">
              <LazyLoad>
                <a href="https://www.yelp.com/user_local_photos?select=c_p3RkiAS1diVuAdjeuU_Q&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/c_p3RkiAS1diVuAdjeuU_Q/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=c_p3RkiAS1diVuAdjeuU_Q&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/Jur_UVdtMOkNM4L36J-gUQ/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=raamgcrD9mh2l6Y6Or6ZLA&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/raamgcrD9mh2l6Y6Or6ZLA/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=bZ8Bpk0SW--paP4RsOGHEA&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/bZ8Bpk0SW--paP4RsOGHEA/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=By7OaD64YQN1PrB4Ub8iZg&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/By7OaD64YQN1PrB4Ub8iZg/o.jpg" />
                </a>
              </LazyLoad>
              <LazyLoad>
                <a href="https://www.yelp.com/user_local_photos?select=CJJWGgkiJ6vgAPHulzgJVg&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media3.fl.yelpcdn.com/bphoto/CJJWGgkiJ6vgAPHulzgJVg/o.jpg" />
                </a>
                <a href="https://www.yelp.com/biz_photos/the-dim-sum-co-westminster-3?select=HyVTfl5T-JJOct7qk85l8Q&reviewid=peqenCxcLwwj7jDCjq5Exg" target="_blank">
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/HyVTfl5T-JJOct7qk85l8Q/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=yIUMZL-lEtyuPzdw6W4tUg&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media4.fl.yelpcdn.com/bphoto/yIUMZL-lEtyuPzdw6W4tUg/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=WBdsgngkxcGQgsOixpP4Uw&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media4.fl.yelpcdn.com/bphoto/WBdsgngkxcGQgsOixpP4Uw/o.jpg" />
                </a>
                <a href="https://www.yelp.com/user_local_photos?select=-MH12w_3IhwMGteJLbK99w&userid=GCcKZJPv5yG-5FDy5j9o5g" target="_blank">
                  <img src="https://s3-media3.fl.yelpcdn.com/bphoto/-MH12w_3IhwMGteJLbK99w/o.jpg" />
                </a>
              </LazyLoad>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodBlog;
