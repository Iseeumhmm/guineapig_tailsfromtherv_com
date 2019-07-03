import React from 'react';


function happeningNow( props, { siteTitle }) {
    
    return (
        <div className="happening_now-container">
            <p style={{backgroundColor: props.highlightColour}} className="happening_now-heading">2019 Maritimes Tour</p>
            <p className="happening_now-text">Blizzard the guinea got to Canada's east coast</p>
        </div>
        
)};

export default happeningNow;