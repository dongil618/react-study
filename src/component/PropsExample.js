import { useState } from "react";
import Age from "./Age";

const PropsExample = (props) => {
    const [age, setAge] = useState(props.age);
    console.log(props.age);

    return (
        <div>
            <h1>props : properties</h1>
            <h3>age : {age}</h3>
            <p>state age를 props 넘겨주기 👇🏻</p>
            <Age age={age}/>
            <button onClick={
                () => {
                    setAge(age+1);
                }
            }>+1</button>
        </div>
    )
}

export default PropsExample