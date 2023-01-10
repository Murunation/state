import "./App.css";
import { useState } from "react";

function App() {
  let [x, setX] = useState(100);
  function decrement() {
    setX(x - 1);
  }

  function add() {
    setX(x + 1);
  }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      {x}
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
