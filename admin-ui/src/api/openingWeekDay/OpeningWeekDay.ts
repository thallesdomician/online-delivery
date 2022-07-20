import { OpenHour } from "../openHour/OpenHour";

export type OpeningWeekDay = {
  createdAt: Date;
  id: string;
  openHour?: Array<OpenHour>;
  updatedAt: Date;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
