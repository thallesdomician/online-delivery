import { OpenHour } from "../openHour/OpenHour";
import { Store } from "../store/Store";

export type OpeningWeekDay = {
  createdAt: Date;
  id: string;
  openHour?: Array<OpenHour>;
  store?: Store | null;
  updatedAt: Date;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
