import { OpenHourUpdateManyWithoutOpeningWeekDaysInput } from "./OpenHourUpdateManyWithoutOpeningWeekDaysInput";

export type OpeningWeekDayUpdateInput = {
  openHour?: OpenHourUpdateManyWithoutOpeningWeekDaysInput;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
