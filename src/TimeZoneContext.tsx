import { TimeZoneCode } from "@dwidge/timezone";
import React from "react";

export const TimeZoneContext = React.createContext<TimeZoneCode | null>(null);
