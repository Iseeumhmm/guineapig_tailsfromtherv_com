import React from 'react';
import Img from 'gatsby-image';
import formatDate from './formatDate';

const postList = (props) => {
    
    return (
    <div className="container-fluid post_list" key={6}>
        {props.data.slice(1).map(( edge, i ) => (
            <div className="row" key={i + "c"}>
                <div className="col-4">
                    <div className="post_list-image box-shadow">
                        <Img
                            key={i}
                            fluid={edge.node.acf.image.localFile.childImageSharp.fluid}
                            alt="Blog Image"
                        />
                    </div>
                </div>
                <div className="col-8">
                    <div className="post_list-description">
                        <h2>{edge.node.title}</h2>
                        <p>{formatDate(edge.node.date)}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
};


export default postList;