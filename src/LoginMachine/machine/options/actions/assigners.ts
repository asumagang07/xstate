import { ActionFunctionMap, assign } from "xstate";
import { IContext, IMachineEvents } from "../../types";

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  submitSignup: assign({
    registered_accounts: (context, event) => {
      console.log("event", event.payload);
      return [...context.registered_accounts, event.payload];
    },
  }),
  submitLogin: assign({
    login_accounts: (_, event) => {
      console.log("event", event.payload);
      return [event.payload];
    },
  }),
  clickLogout: assign({
    login_accounts: (_, event) => {
      return [];
    },
  }),
  assignData: assign({
    registered_accounts: (context, event) => {
      console.log("event", event.payload);
      return [...event.payload];
    },
  }),
  assignSampleData: assign({
    login_accounts: (_, event) => {
      console.log("event", event);
      return event.data;
    },
  }),
  logPayload: (evt, payload) => {
    console.log(payload, "999999999999");
  },
};

export default actions;
