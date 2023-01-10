import "./App.css";
import Header from "./component/Header";
import { useState } from "react";

// function App() {
//   let [x, setX] = useState(100);
//   function decrement() {
//     setX(x - 1);
//   }

//   function add() {
//     setX(x + 1);
//   }
//   return (
//     <div className="App">
//       <button onClick={decrement}>-</button>
//       {x}
//       <button onClick={add}>+</button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
