import { TimeZoneCode } from "@dwidge/timezone";
import { useContext } from "react";
import { formatTimestampWithTimezone } from "./formatTimestampWithTimezone.js";
import { TimeZoneContext } from "./TimeZoneContext.js";

export const useFormatDate = (
  seconds: number | null,
  format = "EEE, MMM d, yyyy h:mm a",
  timeZone: TimeZoneCode | null = useContext(TimeZoneContext),
) =>
  seconds === null
    ? null
    : formatTimestampWithTimezone(seconds, timeZone, format);
