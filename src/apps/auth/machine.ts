import { createMachine } from "xstate";
import { IMachineContext, TMachineEvent, TMachineState } from "./types";
import { login_data, signup_data } from "./data";

export const authMachine = createMachine<
  IMachineContext,
  TMachineEvent,
  TMachineState
>({
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgWWQY0wEsA7MAOgBsB7KEgYgFEA1BgOQBUB9ARgG0AGALqJQAByqxC6QlWIiQAD0TcAHADYANCACeygCz8yegJymVegOx7uAJm79jegL5OtaLLgIly1KFQyMLBycNgLCSCDiktKy8koINipkAKz8aXrJFhZqAMxqFqoqWroJyclkVmaW1nYOzi5axFQQcPLuOPhEpPJRUjJyEfEAtNzGRqbGyXo2Nnk5ibbFiMk5DSDtnl0+NCQ9En2xg4hq-EsI3Mlqaxud3pQ0-uh70f1x+kmp6ZnZeRY2ZzYpuMqlZbPZHC4XEA */
  predictableActionArguments: true,
  id: "authMachine",
  initial: "login",
  context: {
    app_config: {
      container_name: "Login Container",
      components: [...signup_data],
    },
    // app_data: {},
    // params: {}
  },
  states: {
    login: {
      on: {
        EVENT_1: "logout",
      },
    },

    logout: {
      on: {
        EVENT_2: "login",
      },
    },
  },
});
