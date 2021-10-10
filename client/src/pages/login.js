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
          You are already logged in! You may now head{" "}
          <Link to="/">back to the homepage.</Link>
        </h2>
      ) : (
        <div>
          <h2>Login Below</h2>

          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formState.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
              ></input>
            </div>
            <button className="ui fluid primary button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Login;
