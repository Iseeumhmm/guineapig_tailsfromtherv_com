import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const postList = (props) => {    
    return (
    <div className="container-fluid post_list">
        {props.data.slice(1).map(( edges, i ) => {
            const { node: post } = edges;
            return (
            <div className="row" key={i}>
                <div className="col-4 col-md-6">
                    <div className="post_list-image box-shadow">
                        <Link to={`/blog/${post.slug}`}>
                            <Img
                                key={i}
                                fluid={post.acf.image.localFile.childImageSharp.fluid}
                                alt="Blog Image"
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-8 col-md-6">
                    <div className="post_list-description">
                        <Link className="post_list-substr" to={`/blog/${post.slug}`}><p>{`${post.acf.excerpt.substr(0, 85)} ...`}</p></Link>
                        <Link className="post_list-no-substr" to={`/blog/${post.slug}`}><p>{`${post.acf.excerpt.substr(0, 170)} ...`}</p></Link>
                    </div>
                </div>
            </div>
        )})}
    </div>
    )
};


export default postList;