import React, { createContext } from "react";
import {
  IActions,
  IContext,
  IMachineEvents,
  IProps,
  TReactContextType,
} from "../types";
import { spawn } from "./machine";
import { useMachine } from "@xstate/react";

export const Context = createContext<Partial<TReactContextType>>({});

const machine = spawn({});

const BaseComponentProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  const [state, send] = useMachine<IContext, IMachineEvents>(machine, {});

  const handleLogin = (username?: string, password?: string) => {
    send({
      type: "LOGIN",
      payload: {
        username: username,
        password: password,
      },
    });
  };
  const handleSignup = (username?: string, password?: string) => {
    send({
      type: "SIGNUP",
      payload: {
        username: username,
        password: password,
      },
    });
  };

  const OnClickRedirectSignup = () => {
    send("REDIRECT_SIGNUP");
  };

  const OnClickRedirectLogin = () => {
    send("REDIRECT_LOGIN");
  };

  const handleLogout = () => {
    send("LOGOUT");
  };

  const handleOnChange = (key: string, value?: string) => {
    send({
      type: "ON_CHANGE",
      payload: {
        [key]: value,
      },
    });
  };

  const actions: IActions = {
    handleLogin,
    handleSignup,
    handleOnChange,
    OnClickRedirectSignup,
    OnClickRedirectLogin,
    handleLogout,
  };

  return (
    <Context.Provider value={{ send, state, actions }}>
      {children}
    </Context.Provider>
  );
};

export default BaseComponentProvider;
