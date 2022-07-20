import { OpenHourCreateNestedManyWithoutOpeningWeekDaysInput } from "./OpenHourCreateNestedManyWithoutOpeningWeekDaysInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OpeningWeekDayCreateInput = {
  openHour?: OpenHourCreateNestedManyWithoutOpeningWeekDaysInput;
  store?: StoreWhereUniqueInput | null;
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
};
