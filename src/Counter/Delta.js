import React from 'react';

//stateless component
const Delta = (props) => {
    return (
        <div>
            <input value={props.delta} onChange={props.handleChange}/>
        </div>
    );
};

export default Delta;