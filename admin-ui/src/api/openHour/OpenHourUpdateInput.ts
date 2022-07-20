import { OpeningWeekDayWhereUniqueInput } from "../openingWeekDay/OpeningWeekDayWhereUniqueInput";

export type OpenHourUpdateInput = {
  openingWeekDays?: OpeningWeekDayWhereUniqueInput | null;
  startTime?: string | null;
};
