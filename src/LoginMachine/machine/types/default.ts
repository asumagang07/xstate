import {
  ILoginEvent,
  ISignupEvent,
  IFetchSuccessEvent,
  IOnChangeEvent,
  ISubmitLoginEvent,
  IRedirectSignupEvent,
  IRedirectLoginEvent,
  ILogoutEvent,
} from "./events";
import { State, AnyStateNodeDefinition, StateNodeDefinition } from "xstate";

export interface IAccount {
  username: string;
  password: string;
}

export interface IContext {
  registered_accounts: IAccount[];
  login_accounts: IAccount[];
}

export type IMachineEvents =
  | ILoginEvent
  | ISignupEvent
  | IFetchSuccessEvent
  | IOnChangeEvent
  | ISubmitLoginEvent
  | IRedirectSignupEvent
  | IRedirectLoginEvent
  | ILogoutEvent;

export interface IMachineSchema extends AnyStateNodeDefinition {
  states: {
    login?: StateNodeDefinition<IContext, IMachineSchema, IMachineEvents>;
    signup?: StateNodeDefinition<IContext, IMachineSchema, IMachineEvents>;
    dashboard?: StateNodeDefinition<IContext, IMachineSchema, IMachineEvents>;
  };
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}

export type TWorklflowState = State<IContext, IMachineEvents, IMachineSchema>;
