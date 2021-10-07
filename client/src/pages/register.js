import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  //   const [formState, setFormState] = useState({ email: "", password: "" });
  //   // Need mutations?
  //   const [addUser] = useMutation(ADD_USER);

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     const mutationResponse = await addUser({
  //       variables: {
  //         email: formState.email,
  //         password: formState.password,
  //         firstName: formState.firstName,
  //         lastName: formState.lastName,
  //       },
  //     });
  //     const token = mutationResponse.data.addUser.token;
  //     Auth.login(token);
  //   };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  return (
    <div className="ui center aligned container">
      {/* <Link to="/login">← Go to Login</Link> */}
      <h2>Signup</h2>

      <form className="ui form">
        <label htmlFor="firstName">User Name:</label>
        <input placeholder="User" name="userName" type="text" id=" " />
      </form>
      <form className="ui form">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
        />
      </form>
      <div className="ui form">
        <label htmlFor="pwd">Password:</label>
        <input placeholder="******" name="password" type="password" id="pwd" />
      </div>
      <button className="ui fluid primary button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Signup;
