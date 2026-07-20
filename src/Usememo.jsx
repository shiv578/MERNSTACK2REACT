import { useState, useMemo } from "react";

function Appp() {
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState(false);

    const slowFunction = (num) => {
        console.log("Running slow function");

        for (let i = 0; i < 100000000; i++) {
            // simulate expensive work
        }
        return num * 2;

    };

    const result = useMemo(() => slowFunction(count), [count]);

    return (
        <>
            <h1>Result: {result}</h1>

            <button onClick={() => setCount(count + 1)}>
                Click
            </button><br></br>

            <button onClick={() => setMode(!mode)}>
                Toggle Theme
            </button>
        </>
    );
}

export default Appp;