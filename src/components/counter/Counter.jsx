import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const storageCount = localStorage.getItem("count");
    if(storageCount && storageCount != count) {
        setCount(parseInt(storageCount));
    }

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("count", newCount);

        // console.log(count);
        // setCount(prev => prev + 1);
    }

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        localStorage.setItem("count", newCount);
        console.log(newCount);
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>{count}</h2>
            <div style={{textAlign: "center"}}>
                <button onClick={increment} style={{margin: "5px 10px"}}>+</button>
                <button onClick={decrement} style={{margin: "5px 10px"}}>-</button>
            </div>
        </div>
    )
}

export default Counter;