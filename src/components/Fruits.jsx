import React from "react";
import Fruit from "./Fruit";

function Fruits() {

    let fruits = [
        {name: "Banana", price: 1.99},
        {name: "Apple", price: 2.99},
        {name: "Orange", price: 3.99},
        {name: "Mango", price: 4.99},
        {name: "Pineapple", price: 5.99},
        {name: "Grape", price: 6.99},
        {name: "Peach", price: 7.99},
        {name: "Pear", price: 8.99},
        {name: "Cherry", price: 9.99},
        {name: "Strawberry", price: 10.99}
    ];
    return (  
        <div>
            {fruits.map(fruit=>(
                <Fruit name={fruit.name} price={fruit.price}/>
                // <li key={fruit.name}>{fruit.name} - {fruit.price }</li>
            ))}

        </div>
    );
}

export default Fruits;