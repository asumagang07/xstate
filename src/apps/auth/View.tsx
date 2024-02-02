/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ComponentMapper from "../../components/containers/ComponentMapper";
import * as COMPONENTS from "../../components/base";
import { useAuthMachine } from "./hooks";
import { Editor } from "@monaco-editor/react";

const AuthView: React.FC = () => {
  const { state } = useAuthMachine();

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="w-1/2 p-8 flex items-center justify-center">
        <div className="border border-slate-400 w-96 p-8 rounded">
          <h2>{state.context.app_config.container_name}</h2>
          {state.context.app_config.components.map((c: any, i: number) => (
            <ComponentMapper
              key={i}
              components={COMPONENTS}
              componentName={c.name}
              componentProps={c.props}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 ">
        <Editor
          height="100%"
          theme="vs-dark"
          path={"./BaseComponentProvider.tsx"}
          defaultLanguage={"typescript"}
          value={JSON.stringify(state, null, 2)}
        />
      </div>
    </div>
  );
};

export default AuthView;
