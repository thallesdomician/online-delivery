import { OpenHour as TOpenHour } from "../api/openHour/OpenHour";

export const OPENHOUR_TITLE_FIELD = "startTime";

export const OpenHourTitle = (record: TOpenHour): string => {
  return record.startTime || record.id;
};
