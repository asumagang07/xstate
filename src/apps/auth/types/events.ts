import { AnyEventObject } from "xstate";

export interface IEvent1<TPayload = unknown> extends AnyEventObject {
  type: "EVENT_1";
  payload: TPayload;
}

export interface IEvent2<TPayload = unknown> extends AnyEventObject {
  type: "EVENT_2";
  payload: TPayload;
}

export interface IEventLogin<TPayload = unknown> extends AnyEventObject {
  type: "LOGIN";
  payload: TPayload;
}

export interface IEventRedirectSignup<TPayload = unknown>
  extends AnyEventObject {
  type: "REDIRECT_SIGNUP";
  payload: TPayload;
}

export interface IEventOnChange extends AnyEventObject {
  type: "ON_CHANGE";
  payload: {
    id?: string;
    value?: string;
  };
}
