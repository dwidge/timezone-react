import { TimeZoneCode } from "@dwidge/timezone";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

/**
Formats a Unix timestamp with a specified timezone and pattern using the date-fns and date-fns-tz libraries.
@param {number} timestamp - The Unix timestamp to format.
@param {string} timeZone - The IANA timezone name to use for formatting, e.g. "America/New_York".
@param {string} [pattern="EEE, MMM d, yyyy h:mm a"] - The pattern to use for formatting the date, using the syntax specified in the date-fns library.
@returns {string} The formatted date string.
*/
export function formatTimestampWithTimezone(
  timestampSeconds: number,
  timeZone: TimeZoneCode | null,
  pattern = "EEE, MMM d, yyyy h:mm a",
) {
  // Convert the Unix timestamp to a Date object
  const date = new Date(timestampSeconds * 1000);

  // Convert the Date object to the specified timezone
  const zonedDate = utcToZonedTime(date, timeZone ?? "Europe/London");

  // Format the zonedDate to a string in the desired format
  const formattedDate = format(zonedDate, pattern);

  return formattedDate;
}

// function example() {
//   // Example usage
//   const timestamp = 1645029420; // Unix timestamp for 2022-02-16 11:57:00 UTC
//   const timeZone = "America/New_York";
//   const formattedDate = formatTimestampWithTimezone(timestamp, timeZone);
//   console.log("example1", formattedDate); // Output: Wed, Feb 16, 2022 6:57 AM
// }
