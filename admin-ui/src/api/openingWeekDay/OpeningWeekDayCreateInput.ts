import { OpenHourCreateNestedManyWithoutOpeningWeekDaysInput } from "./OpenHourCreateNestedManyWithoutOpeningWeekDaysInput";

export type OpeningWeekDayCreateInput = {
  openHour?: OpenHourCreateNestedManyWithoutOpeningWeekDaysInput;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
