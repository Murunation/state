import React from "react";
import "../style/profile.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Profile(prop) {
  const { setIsLoggedIn } = prop;
  return (
    <div className="pro">
      <h2>Profile</h2>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </div>
  );
}
