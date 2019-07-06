import React from 'react';


function happeningNow( props ) {
    
    return (
        <div className="happening_now-container">
            <p style={{backgroundColor: props.highlightColour}} className="happening_now-heading box-shadow border-radius">2019 Maritime Tour</p>
            <p className="happening_now-text">Blizzard is going to Canada's east coast</p>
        </div>
        
)};

export default happeningNow;