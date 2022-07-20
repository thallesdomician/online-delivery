import { OpeningWeekDay } from "../openingWeekDay/OpeningWeekDay";

export type OpenHour = {
  createdAt: Date;
  id: string;
  openingWeekDays?: OpeningWeekDay | null;
  startTime: string | null;
  updatedAt: Date;
};
