function Animal() {

    let animals = ['cat', 'dog', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'snake', 'lizard', 'guinea pig', 'chinchilla', 'ferret', 'hedge'];
    return ( 
        <div>
            <ol>
            {animals.map(animal=>(
            <li>{animal}</li>
        ))}
            </ol>
        
        </div>
     );
}

export default Animal;