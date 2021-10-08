import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Link } from 'react-router-dom'

function Signup(props) {
    const [formState, setFormState] = useState({ usernmae: "", email: "", password:"" });
    const [addUser, {error, data}] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const { data } = await addUser({
        variables: {
          ...formState
        },
      });
      const token = data.createUser.token;
      Auth.login(token);
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
        <h3>You have sucesffully registered! You may now head{' '}
        <Link to="/"> back to the homepage. </Link> 
        </h3> ) : (
      <div>
      <h2>Signup</h2>

      <form className="ui form">
        <div className="field">
        <label htmlFor="firstName">User Name:</label>
        <input placeholder="Username" name="username" type="text" onChange={handleChange}/>
        </div>
        <div className="field"> 
        <label htmlFor="email">Email:</label>
        <input placeholder="youremail@test.com" name="email" type="email" onChange={handleChange} />
        </div>
        <div className="field">
        <label htmlFor="pwd">Password:</label>
        <input placeholder="******" name="password" type="password" onChange={handleChange}/>
        </div>
        <button className="ui fluid primary button" type="submit" onClick={handleFormSubmit}>
        Submit
        </button>
       </form>
       </div> 
       )} 
       
       {error && (
         <h2> {error.message}</h2>
       )} 
    </div>
  );
}

export default Signup;
