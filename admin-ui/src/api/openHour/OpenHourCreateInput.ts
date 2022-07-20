import { OpeningWeekDayWhereUniqueInput } from "../openingWeekDay/OpeningWeekDayWhereUniqueInput";

export type OpenHourCreateInput = {
  openingWeekDays?: OpeningWeekDayWhereUniqueInput | null;
  startTime?: string | null;
};
