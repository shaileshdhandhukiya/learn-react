function Hello(props) {
    return (  
        <>
        <h1>Hello, {props.name}</h1>
        <p>{props.role}</p>
        </>
    );
}

export default Hello;