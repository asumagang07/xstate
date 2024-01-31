import { ServiceConfig, Sender } from "xstate";
import { IAccount, IContext, IMachineEvents, IRecord } from "../../types";

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  fetchData: () => async (send: Sender<IMachineEvents>) => {
    //API request here
    try {
      const mock_data: IAccount[] = [
        {
          username: "iquillosa",
          password: "12345",
        },
      ];

      send({
        type: "FETCH_SUCCESS",
        payload: mock_data,
      });
    } catch (error) {
      throw new Error("Error");
    }
  },
};

export default services;
