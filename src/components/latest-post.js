import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

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
            <Link to={`/blog/${props.slug}`}>
                <Img
                    key="4"
                    fluid={props.image.fluid}
                    alt="blog_image_one"
                />
                <div className="overlay">
                    <div className="overlay-text"><h2>{props.location}</h2></div>
                </div>
            </Link>
        </div>
        <div className="latest_post_text-container">
            <h2 dangerouslySetInnerHTML={{ __html: props.what }}></h2>
        </div>
      </div>
);


export default latestPost;