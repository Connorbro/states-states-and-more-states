import React from 'react';

const Pets = (props) => {
    return(
        <div>
            <h1>My pets name is {props.name} and its species is {props.species}</h1>
        </div>
    )
}
export default Pets;