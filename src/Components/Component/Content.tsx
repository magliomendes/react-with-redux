import * as React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Content = (props: Props) => {
  return <div className="App">{props.children}</div>;
};