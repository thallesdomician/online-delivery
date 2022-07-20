import { OpeningWeekDay as TOpeningWeekDay } from "../api/openingWeekDay/OpeningWeekDay";

export const OPENINGWEEKDAY_TITLE_FIELD = "id";

export const OpeningWeekDayTitle = (record: TOpeningWeekDay): string => {
  return record.id || record.id;
};
