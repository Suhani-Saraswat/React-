function handleClick() {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDblClick() {
    console.log("You double clicked");
}

export function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi eum autem laudantium. 
                Harum dolore animi saepe. Atque incidunt dicta recusandae inventore. Ea voluptatem accusantium porro unde atque 
                officiis? Facilis!
            </p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>
    );
}