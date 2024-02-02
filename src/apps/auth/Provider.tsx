import { FC, ReactNode, createContext } from "react";
import { useMachine } from "@xstate/react";
import { authMachine } from "./machine";
import { AuthMachineContext, IActions } from "./types";

export const Context = createContext<AuthMachineContext | undefined>(undefined);

const Provider: FC<{ children: ReactNode }> = (props) => {
  const [state, send] = useMachine(authMachine);

  const handleLogin = (username?: string, password?: string) => {
    send({
      type: "LOGIN",
      payload: {
        username: username,
        password: password,
      },
    });
  };

  const onClickRedirectSignup = () => {
    send("REDIRECT_SIGNUP");
  };

  const actions: IActions = {
    handleLogin,
    onClickRedirectSignup,
  };

  return (
    <Context.Provider value={{ state, send, actions }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
