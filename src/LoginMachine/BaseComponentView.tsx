import React, { useContext } from "react";
import { IProps, TReactContextType } from "../types";
import { Context } from "./BaseComponentProvider";
import { Dashboard, Login, Signup } from "./components";
import Editor from "@monaco-editor/react";

const BaseComponentView: React.FC<IProps> = () => {
  const { state } = useContext<Partial<TReactContextType>>(Context);
  // console.log(
  //   "%c 🌞: state ",
  //   "font-size:16px;background-color:#268f1e;color:white;",
  //   state
  // );

  return (
    <div className="flex w-screen h-screen overflow-hidden divide-x divide-black">
      <div className="w-1/2 p-8 flex items-center justify-center">
        {state?.value === "login" && <Login />}
        {state?.value === "signup" && <Signup />}
        {state?.value === "dashboard" && <Dashboard />}
      </div>
      <div className="w-1/2 overflow-y-auto text-xs">
        <Editor
          height="100%"
          theme="vs-dark"
          path={"./BaseComponentProvider.tsx"}
          defaultLanguage={"typescript"}
          value={JSON.stringify(state?.context, null, 2)}
        />
        {/* <pre>{JSON.stringify(state?.value, null, 2)}</pre>
        <pre>{JSON.stringify(state?.context, null, 2)}</pre>
        <pre>{JSON.stringify(state?.event, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default BaseComponentView;
