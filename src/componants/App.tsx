import React, { useMemo } from "react";
// import "./Basics.css";
import { array } from "./Coplex";

function Basics() {
    const [counter, setCounter] = React.useState(0);

    const element = useMemo(() => {
     array.find(item => item.value === true)}, []);
  return (
    <>
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
    {/* <div>
        <h2>Array value </h2>
    </div> */}
    </>
  );
}


export default Basics;