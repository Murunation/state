import React from "react";
import { useState } from "react";
import "../style/welcome.css";

export default function WelcomePage(prop) {
  const { alert, setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="welcome">
      <h2>Welcome Home Page</h2>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="User Name"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <button onClick={() => setLogin(userName, password)}>Login</button>
    </div>
  );
}
