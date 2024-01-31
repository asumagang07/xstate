import React from "react";
import { IProps } from "../types";

import BaseComponentProvider from "./BaseComponentProvider";
import BaseComponentView from "./BaseComponentView";

const BaseComponent: React.FC<IProps> = (props) => (
  <BaseComponentProvider {...props}>
    <BaseComponentView {...props} />
  </BaseComponentProvider>
);

export default BaseComponent;
