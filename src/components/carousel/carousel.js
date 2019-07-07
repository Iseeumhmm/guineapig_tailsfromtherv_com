import React from 'react';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const carousel = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
        {props.images.slice(1).map(({ node, i }) => {
            return (
                <div key={i + "div"} className="carousel-container">
                    <div className="overlay-container">
                        <Link to={`/blog/${node.slug}`}>
                            <Img
                                className="carousel-image"
                                key={i}
                                fluid={node.acf.image.localFile.childImageSharp.fluid}
                                alt="blog_image_one"
                            />
                            <div className="overlay">
                                <div className=" overlay-text overlay-text--carousel"><h2>{node.acf.location}</h2></div>
                            </div>
                        </Link>
                    </div>
                </div>
        )})}
      </Slider>
    )
}

export default carousel;