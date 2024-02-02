import { v4 } from "uuid";

export const login_data = [
  {
    id: v4(),
    name: "Input",
    props: {
      placeholder: "Email",
      type: "email",
    },
  },
  {
    id: v4(),
    name: "Input",
    props: {
      placeholder: "Password",
      type: "password",
    },
  },
  {
    id: v4(),
    name: "Button",
    props: {
      children: "Login",
      onClick: () => alert("Login Clicked"),
    },
  },
  {
    id: v4(),
    name: "Button",
    props: {
      children: "Register",
      onClick: () => alert("Register Clicked"),
    },
  },
];

export const signup_data = [
  {
    id: v4(),
    name: "Input",
    props: {
      placeholder: "Email",
      type: "email",
    },
  },
  {
    id: v4(),
    name: "Input",
    props: {
      placeholder: "Password",
      type: "password",
    },
  },
  {
    id: v4(),
    name: "Button",
    props: {
      children: "Register",
      onClick: () => alert("Register Clicked"),
    },
  },
];
