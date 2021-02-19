import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter'
    else return lat > 0 ? 'winter' : 'summer'
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach.",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's chilly",
        iconName: "snowflake"
    } 
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    return (
        <h1>
            <i className={`${iconName} icon`} />
            {text }
            <i className={`${iconName} icon`} />
        </h1>)
}

export default SeasonDisplay; 