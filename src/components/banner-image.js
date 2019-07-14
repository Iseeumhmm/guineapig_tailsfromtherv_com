import React from 'react';
import Img from 'gatsby-image';


const bannerImage = (props) => (
        <div className="banner_image-container">
          <Img
            key="4"
            fluid={props.image}
            alt="blog_image_one"
          />
          <div className="overlay overlay--banner">
            {/* <div className="banner_image-text">
              <h1>Coming July 2019</h1>
            </div> */}
          </div>
        </div>
  );
export default bannerImage;