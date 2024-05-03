import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/logSlice";
import { useNavigate } from "react-router";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    if (email && password) {
      dispatch(loginUser({ email, password })).then(() => {
        navigate("/user");
      });
    } else {
      console.error("Error: Please fill in all fields");
      alert("Error: Please fill in all fields");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      <form className="form" onSubmit={handleForm}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default Form;
