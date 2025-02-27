import React from 'react';

function Fruit({name,price}) {
    return ( 

        <li>{price > 2 ? <h3>Price of {name} is {price}</h3> : '' }</li>
        
     );
}

export default Fruit;