import { MachineConfig } from "xstate";
import { IContext, IMachineEvents, IMachineSchema } from "./types";

const config: MachineConfig<IContext, IMachineSchema, IMachineEvents> = {
  id: "login-machine",
  initial: "login",
  states: {
    login: {
      // invoke: {
      //   src: "fetchData",
      // },
      on: {
        ON_CHANGE: {
          actions: ["logPayload"],
        },
        LOGIN: [
          {
            cond: "isRegisteredUser",
            actions: ["submitLogin"],
            target: "dashboard",
          },
          {
            target: "login",
          },
        ],
        REDIRECT_SIGNUP: {
          target: "signup",
        },
        // FETCH_SUCCESS: {
        //   actions: ["assignData"],
        // },
      },
    },
    signup: {
      on: {
        SIGNUP: [
          {
            cond: "isUsernameOrPasswordEmpty",
            actions: ["submitSignup"],
            target: "login",
          },
          {
            target: "signup",
          },
        ],
        REDIRECT_LOGIN: {
          target: "login",
        },
      },
    },
    dashboard: {
      // after: {
      //   5000: {
      //     actions: ["clickLogout"],
      //     target: "login",
      //   },
      // },
      on: {
        LOGOUT: {
          actions: ["clickLogout"],
          target: "login",
        },
      },
    },
  },
};

export default config;
