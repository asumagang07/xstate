import { FC, useContext } from "react";
import { TReactContextType } from "../../../types";
import { Context } from "../../BaseComponentProvider";
import { Button } from "..";

interface IDasboardProps {
  username?: string;
  password?: string;
}

const Dasboard: FC<IDasboardProps> = () => {
  const { state, actions } = useContext<Partial<TReactContextType>>(Context);

  return (
    <div className=" h-auto border w-80 p-8 mb-8">
      <div className="flex justify-between">
        <h2>
          Welcome
          <span className="font-bold">{` ${
            state?.context?.login_accounts[0]?.username ?? ""
          } !`}</span>
        </h2>
        <Button onClick={actions?.handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Dasboard;
