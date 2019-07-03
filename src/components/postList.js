import React from 'react';


const postList = (props) => {
    return (
    <div key={6}>
        {props.data.slice(1).map(( node, i ) => (
            <div key={i + "c"} className="carousel-container">
                <h2>{node.title}</h2>
            </div>
        ))}
    </div>
    )
};


export default postList;