import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";

import Auth from "../utils/auth";

// tricking the system
const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      const token = data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      console.log("we are comming here");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="ui center aligned container">
      {data ? (
        <h2>
          <span className="hiWhite">
            You are already logged in! You may now head{" "}
            <Link to="/">back to the homepage.</Link>
          </span>
        </h2>
      ) : (
        <div>
          <h2>
            <span className="hiWhite">Login Below</span>
          </h2>

          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field">
              <label>
                <span className="hiWhite">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formState.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="field">
              <label>
                <span className="hiWhite">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="******"
                value={formState.password}
                onChange={handleChange}
              ></input>
            </div>
            <button className="ui fluid primary button" type="submit">
              Log In
            </button>
          </form>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Login;
