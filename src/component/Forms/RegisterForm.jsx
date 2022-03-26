import React from "react";
// import { toast } from "react-toastify";
// import Joi from "joi-browser";
// import { register } from "../services/userService";
// import { loginWithJwt } from "./../services/authService";
import { BtnSpan, Buttons } from "../ButtonElements";
import { FormContainer, FormWrapper } from "./FormElements";
import FormExtension from "./FormExtension";
import { Link } from "react-router-dom";
class RegisterForm extends FormExtension {
  state = {
    data: { name: "", username: "", password: "" },
    errors: {},
  };

  // schema = {
  //   name: Joi.string().required().label("Name"),
  //   username: Joi.string().required().email().label("Username"),
  //   password: Joi.string().required().min(6).label("Password"),
  // };

  doSubmit() {
    // try {
    //   const { headers } = await register(this.state.data);
    //   loginWithJwt(headers["x-auth-token"]);
    //   window.location = "/";
    //   toast("Registered");
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.name = error.response.data;
    //     console.log(error.response.data);
    //     this.setState({ errors });
    //     toast(errors.name);
    //   }
    // }

    alert("Registered");
    window.location = "/";
  }

  render() {
    const Button = Buttons(Link);
    return (
      <FormContainer>
        <div className="form_btn">
          <Button primary="true" dark="true" to="/" className="btn-sm">
            <BtnSpan>Home</BtnSpan>
          </Button>
        </div>
        <FormWrapper onSubmit={this.handleSubmit} className="form">
          <h1>Register</h1>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div className="form-div">
            {this.renderButton("Submit")}
            <Link
              style={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#fff",
                width: "60px",
                textDecorationColor: "seashell",
                textDecorationLine: "underline",
              }}
              to="/signin"
            >
              Login
            </Link>
          </div>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default RegisterForm;
