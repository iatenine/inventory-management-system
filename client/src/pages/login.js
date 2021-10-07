//import React, { useState } from "react";
//import { useMutation } from "@apollo/client";
//import { Link } from "react-router-dom";
//import { LOGIN } from "../utils/mutations";
//import Auth from "../utils/auth";

export const Login = () => {
  // const [formState, setFormState] = useState({ email: "", password: "" });
  // const [login, { error }] = useMutation(LOGIN);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await login({
  //       variables: { email: formState.email, password: formState.password },
  //     });
  //     const token = mutationResponse.data.login.token;
  //     Auth.login(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="ui center aligned container">
      <h2>Login Below</h2>

      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input type="text" name="Username" placeholder="Username"></input>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="Password" placeholder="Password"></input>
        </div>
        <button className="ui fluid primary button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

//  ---OLD INPUT FORM---

//  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
//    <Grid.Column style={{ maxWidth: 450 }}>
//      <Header as="h2" color="teal" textAlign="center">
//        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg" />{" "}
//        Log-in to your account
//      </Header>
//      <Form size="large">
//        {" "}
//        {/*onSubmit={handleFormSubmit}*/}
//        <Segment stacked>
//          <Form.Input
//            fluid
//            icon="user"
//            iconPosition="left"
//            placeholder="E-mail address"
//          />{" "}
//          {/*onChange={handleChange}*/}
//          <Form.Input
//            fluid
//            icon="lock"
//            iconPosition="left"
//            placeholder="Password"
//            type="password"
//          />{" "}
//          {/*onChange={handleChange}*/}
//          <Button color="teal" fluid size="large">
//            Login
//          </Button>
//        </Segment>
//      </Form>
//      <Message>
//        New to us? <a href="#">Sign Up</a>
//      </Message>
//    </Grid.Column>
//  </Grid>;
