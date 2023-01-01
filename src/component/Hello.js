import World from "./World";

const Hello = () => {
    return(
        <div>
            <h1 style={{
                color : '#f00',
                borderRight : '2px solid #000',
                marginBottom : '30px',
                opacity : 0.25
            }}>Hello</h1>
            <World/>
            <div className="box">Hello</div>
        </div>
    )
}

export default Hello;