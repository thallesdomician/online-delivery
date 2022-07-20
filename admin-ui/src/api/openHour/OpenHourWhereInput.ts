import { StringFilter } from "../../util/StringFilter";
import { OpeningWeekDayWhereUniqueInput } from "../openingWeekDay/OpeningWeekDayWhereUniqueInput";

export type OpenHourWhereInput = {
  id?: StringFilter;
  openingWeekDays?: OpeningWeekDayWhereUniqueInput;
};
