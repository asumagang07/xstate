import {
  State,
  ResolveTypegenMeta,
  TypegenDisabled,
  BaseActionObject,
  ServiceMap,
} from "xstate";
import { TButtonProps, TInputProps } from "../../../components/base";
import {
  IEvent1,
  IEvent2,
  IEventLogin,
  IEventRedirectSignup,
  IEventOnChange,
} from "./events";

interface ITemplateComponent<T> {
  id?: string;
  name: string;
  props: T;
}

interface IGenericTemplate<T> {
  container_name: string;
  components: ITemplateComponent<T>[];
}

export interface IMachineContext {
  app_config: IGenericTemplate<TInputProps | TButtonProps>;
  // app_data: {}
  // params: {}
}

// Combined events
export type TMachineEvent =
  | IEvent1
  | IEvent2
  | IEventLogin
  | IEventRedirectSignup
  | IEventOnChange;

export type TMachineState =
  | { value: "login"; context: IMachineContext }
  | { value: "logout"; context: IMachineContext }
  | { value: "signup"; context: IMachineContext };

export type AuthMachineContext = {
  state: State<
    IMachineContext,
    TMachineEvent,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    TMachineState,
    ResolveTypegenMeta<
      TypegenDisabled,
      TMachineEvent,
      BaseActionObject,
      ServiceMap
    >
  >;
  send: (event: TMachineEvent) => void;
  actions?: IActions;
};

export interface IActions {
  // TODO: Define needed actions here.
  handleLogin: (username?: string, password?: string) => void;
  onClickRedirectSignup: () => void;
}
