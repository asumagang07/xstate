import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  samplePromise: async () => {
    //API request here
    const mock_data = [1, 2, 3];
    return mock_data;
  },
};

export default services;
