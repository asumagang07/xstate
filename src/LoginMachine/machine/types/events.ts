import { AnyEventObject } from "xstate";

export interface ISignupEvent extends AnyEventObject {
  type: "SIGNUP";
}
export interface ILoginEvent extends AnyEventObject {
  type: "LOGIN";
}

export interface IFetchSuccessEvent extends AnyEventObject {
  type: "FETCH_SUCCESS";
}

export interface IOnChangeEvent extends AnyEventObject {
  type: "ON_CHANGE";
}

export interface ISubmitLoginEvent extends AnyEventObject {
  type: "SUBMIT_LOGIN";
}

export interface IRedirectSignupEvent extends AnyEventObject {
  type: "REDIRECT_SIGNUP";
}

export interface IRedirectLoginEvent extends AnyEventObject {
  type: "REDIRECT_LOGIN";
}

export interface ILogoutEvent extends AnyEventObject {
  type: "LOGOUT";
}
