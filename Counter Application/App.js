import "./App.css";
import React from "react";
import Display from "./Component/Display";
import CounterButton from "./Component/Button";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Display content="Counter Application" />
      <Display content={count} />
      <CounterButton
        className="in"
        content="Increment"
        func={() => setCount(count + 1)}
      />
      &nbsp;
      <CounterButton
        className="de"
        content="Decrement"
        func={() => setCount(count - 1)}
        condition={count == 0}
      />
      &nbsp;
      <CounterButton className="res" content="Reset" func={() => setCount(0)} />
    </div>
  );
}

export default App;
