import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "f21a938a-e741-4805-a989-35f591cfa1d9",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      const response = await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      console.log("Response: ", response);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error);
      if (error.response) {
        console.error("Error data: ", error.response.data);
        console.error("Error status: ", error.response.status);
        setError("Incorrect credentials!");
      } else if (error.request) {
        console.error("Error request: ", error.request);
        setError("Network error. Please try again.");
      } else {
        console.error("Error message: ", error.message);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>LOGIN</span>
            </button>
          </div>
          {error && <h2 className="error">{error}</h2>}
        </form>
      </div>
    </div>
  );
};

export default Login;
