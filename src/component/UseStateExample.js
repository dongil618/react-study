import { useState } from "react";

const UseStateExample = () => {
    // let name = "동일";
    const [name, setName] = useState("동일");

    function changeName() {
        name === "동일" ? setName("동동") : setName("동일");
        console.log(name);
        // document.getElementById("name").innerText = name;
    }

    return(
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>changeName</button>
            {/* 위와 동일한 기능 */}
            <button onClick={
                () => {
                    setName(name === "동일" ? "동동" : "동일")
                }
            }>changeName</button>
        </div>
    );
}

export default UseStateExample