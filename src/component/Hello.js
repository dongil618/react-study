const Hello = () => {
    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(e) {
        console.log(e.target.value);
    }

    function showTxt(txt) {
        console.log(txt);
    }

    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button
                onClick={() => {
                    showAge(27);
                }
            }>Show age</button>
            <input type="text" onChange={showText} />
            {/* 위와 동일한 기능 */}
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value);
                }
            } />
            {/* 위와 동일한 기능 */}
            <input type="text" onChange={
                (e) => {
                    const txt = e.target.value;
                    showTxt(txt);
                }
            } />
        </div>
    )
}

export default Hello;