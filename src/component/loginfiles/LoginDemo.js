import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utililies/auth";

const LoginDemo = () => {
  const [user, setUser] = useState("");
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit= () => {
    auth.login(user)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        style={{
          width: "50%",
          margin: "10px auto",
          border: "solid",
          padding: "40px",
        }}
      >
        <label htmlFor="username" style={{ display: "block" }}>
          {" "}
          Username
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <button type="submit" style={{ width: "20%" }}>Login</button>
      </form>
    </div>
  );
};

export default LoginDemo;
