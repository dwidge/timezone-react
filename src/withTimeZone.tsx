import { TimeZoneCode } from "@dwidge/timezone";
import React from "react";
import { TimeZoneContext } from "./TimeZoneContext.js";

export const withTimeZone =
  <Props,>(Component: React.FC<Props & { timeZone: TimeZoneCode | null }>) =>
  (props: Props) => (
    <TimeZoneContext.Consumer>
      {(timeZone) => <Component timeZone={timeZone} {...props} />}
    </TimeZoneContext.Consumer>
  );
