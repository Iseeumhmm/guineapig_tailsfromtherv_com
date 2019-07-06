import React from 'react';
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel = (props) => (
        <Carousel 
          infiniteLoop
        //   showArrows={false}
          centerMode
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          >
            {props.images.map(({ node, i }) => (
                <div key={i + "div"} className="carousel-container">
                    <div className="overlay-container">
                        <Img
                            key={i}
                            fluid={node.acf.image.localFile.childImageSharp.fluid}
                            alt="blog_image_one"
                        />
                        <div className="overlay">
                            <div className=" overlay-text overlay-text--carousel"><h2>{node.acf.location}</h2></div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
);

export default carousel;