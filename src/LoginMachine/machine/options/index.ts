import { MachineOptions } from "xstate";
import { IContext, IMachineEvents } from "../types";

import actions from "./actions";
import services from "./services";
import guards from "./guards";

const options: MachineOptions<IContext, IMachineEvents> = {
  actions,
  services,
  guards,
  activities: {},
  delays: {},
};

export default options;
