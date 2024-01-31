import { ConditionPredicate } from "xstate";
import { IContext, IMachineEvents } from "../types";
import { IRecord } from "../types";

const guards: IRecord<ConditionPredicate<IContext, IMachineEvents>> = {
  isRegisteredUser: (context, event) => {
    const exist = context.registered_accounts.find(
      (acc) => acc.username === event.payload.username
    );

    if (exist) return true;
    return false;
  },
  isUsernameOrPasswordEmpty: (_, event) => {
    if (event?.payload?.username != "" || event?.payload?.password != "")
      return true;
    return false;
  },
};

export default guards;
