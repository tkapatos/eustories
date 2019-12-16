import React from 'react';

const moduleComponent = (props ) => {
    return (
        <div>
            <p onClick={props.click}>Code is {props.name} and number of stories is {props.numOfStories} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default moduleComponent;
