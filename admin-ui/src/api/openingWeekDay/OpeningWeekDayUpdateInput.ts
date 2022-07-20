import { OpenHourUpdateManyWithoutOpeningWeekDaysInput } from "./OpenHourUpdateManyWithoutOpeningWeekDaysInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OpeningWeekDayUpdateInput = {
  openHour?: OpenHourUpdateManyWithoutOpeningWeekDaysInput;
  store?: StoreWhereUniqueInput | null;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
