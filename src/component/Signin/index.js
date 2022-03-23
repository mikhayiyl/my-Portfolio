import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  Icon,
  Form,
  FormLabel,
  Text,
  FormInput,
  FormWrap,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Mikhayiyl</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlfor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlfor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
