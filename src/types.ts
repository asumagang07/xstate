/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sender } from "xstate";
import { TWorklflowState, IMachineEvents } from "./LoginMachine/machine/types";

export interface IProps {
  // TODO: Define Needed props here.
  children?: any;
}

export type TReactContextType = {
  state: TWorklflowState;
  send: Sender<IMachineEvents>;
  actions: IActions;
};

export interface IActions {
  // TODO: Define needed actions here.
  handleLogin: (username?: string, password?: string) => void;
  handleSignup: (username?: string, password?: string) => void;
  handleOnChange: (key: string, value: string) => void;
  OnClickRedirectSignup: () => void;
  OnClickRedirectLogin: () => void;
  handleLogout: () => void;
}

export * from "./LoginMachine/machine/types";
