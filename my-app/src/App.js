import "./App.css";
import { useState } from "react";
import Profile from "./component/Profile";
import WelcomePage from "./component/WelcomePage";
import UsersData from "./data";
import "bootstrap/dist/css/bootstrap.css";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState(false);
  // const [count, setCount] = useState(0);
  // function loginHandler() {
  //   setIsLoggedIn(!isLoggedIn);
  //   setCount(count + 1);
  // }

  function loginHandler(userName, password) {
    console.log("Login handler running");
    console.log("UserName: ", userName);
    console.log("Password: ", password);
    UsersData.forEach((user) => {
      if (userName === user.name && password === user.password) {
        setIsLoggedIn(true);
      } else {
        console.error("Wrong Password or UserName");
        // alert(true);
      }
    });
  }

  return (
    <div className="main">
      <div className="App">
        {isLoggedIn ? (
          <Profile setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <WelcomePage setLogin={loginHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
