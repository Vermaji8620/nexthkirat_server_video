"use client";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-4 justify-center place-items-center h-screen">
      <div>
        username
        <input
          type="text"
          placeholder="enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="">
        <button
          type="button"
          className="bg-red-600"
          onClick={() => {
            axios.post("http://localhost:3000/api/user", {
              username,
              password,
            });
          }}
        >
          signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
