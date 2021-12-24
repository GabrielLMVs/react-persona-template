import React from "react";

const person = (props) => {
    return (
        <div> 
        <p>Soy {props.name} de {props.age} años de edad</p>
        <p> { props.children } </p>
    </div>
    );
    
    
    
}

export default person;