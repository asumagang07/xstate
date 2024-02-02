import React from "react";
import Provider from "./Provider";
import View from "./View";

const AuthApp: React.FC = () => {
  return (
    <Provider>
      <View />
    </Provider>
  );
};

export default AuthApp;
