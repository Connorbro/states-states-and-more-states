import React from 'react';

const Aboutme = (props) => {
    return(
        <div>
            <h1>My name is {props.name} and my age is {props.age} I am cute:{props.cute}</h1>
        </div>
    )
}
export default Aboutme;