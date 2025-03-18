import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col intems-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-100"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-500 mt-4"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 bg-emerald-600 text-xl py-3 px-5 rounded-full mt-4 cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
