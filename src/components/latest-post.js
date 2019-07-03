import React from 'react';
import Img from 'gatsby-image';


const latestPost = (props) => (
            
      <div className="latest_post-container" style={{backgroundColor: "#FFFFFFFF"}}>
        <div className="latest_post-heading--container">
            <div className="latest_post-heading--box-outer">
                <div className="latest_post-heading--box" style={{backgroundColor: props.highlight}}>
                    <h2>{props.title}</h2>
                </div>
            </div>
        <div className="latest_post-heading--bar" style={{backgroundColor: props.highlight}}/>
        </div>
        <div className="overlay-container box-shadow">
          <Img
                key="4"
                fluid={props.image.fluid}
                alt="blog_image_one"
            />
            <div className="overlay">
                <div className="overlay-text"><h2>{props.location}</h2></div>
            </div>
        </div>
        <div className="latest_post_text-container">
            {props.what}
        </div>
      </div>
);


export default latestPost;