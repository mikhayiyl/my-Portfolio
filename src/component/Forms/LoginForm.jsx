import React from "react";
// import Joi from "joi-browser";
import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import FormExtension from "./FormExtension";
import { BtnSpan, Buttons } from "../ButtonElements";
import { FormContainer, FormWrapper } from "./FormElements";
// import authService, { login } from "../../services/authService";
// import { Navigate } from "react-router-dom";

export default class LoginForm extends FormExtension {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  // schema = {
  //   email: Joi.string().required().email().label("Email Address"),
  //   password: Joi.string().required().min(6).label("Password"),
  // };

  doSubmit() {
    // try {
    //   await login(this.state.data);
    //   toast("Success");
    //   window.location = "/";
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     const errors = { ...this.state.errors };
    //     errors.username = error.response.data;
    //     this.setState({ errors });
    //     toast.error(errors.username);
    //   } else {
    //     toast.error("Incorect Email Address");
    //   }
    // }
    alert("Not connected to database yet");
  }

  render() {
    // if (authService.getCurrentUser()) return <Navigate to="/" />;
    const Button = Buttons(Link);
    return (
      <FormContainer>
        <div className="form_btn">
          <Button primary="true" dark="true" to="/" className="btn-sm">
            <BtnSpan>Home</BtnSpan>
          </Button>
        </div>

        <FormWrapper onSubmit={this.handleSubmit} className="form">
          <h1>Login</h1>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div className="form-div">
            {this.renderButton("Login")}
            <Link
              style={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#fff",
                width: "60px",
                textDecorationColor: "seashell",
                textDecorationLine: "underline",
              }}
              to="/register"
            >
              Register
            </Link>
          </div>
        </FormWrapper>
      </FormContainer>
    );
  }
}
