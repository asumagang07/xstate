import { ActionFunctionMap } from "xstate";

import assigners from "./assigners";
import { IContext, IMachineEvents } from "../../types";

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  ...assigners,
};

export default actions;
