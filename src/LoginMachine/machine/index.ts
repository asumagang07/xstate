import { Machine, interpret } from "xstate";
import { IContext } from "./types";
import config from "./config";
import options from "./options";

const default_context: IContext = {
  registered_accounts: [
    {
      username: "iquillosa",
      password: "12345",
    },
  ],
  login_accounts: [],
};

export const spawn = (context: Partial<IContext>) => {
  const machine_config = {
    ...config,
    context: {
      ...default_context,
      ...context,
    },
  };
  return Machine(machine_config, options);
};

export const Interpret = (context: Partial<IContext>) => {
  const machine = spawn(context);
  const service = interpret(machine);
  return service;
};

export * from "./types";
