import { OpeningWeekDayWhereInput } from "./OpeningWeekDayWhereInput";
import { OpeningWeekDayOrderByInput } from "./OpeningWeekDayOrderByInput";

export type OpeningWeekDayFindManyArgs = {
  where?: OpeningWeekDayWhereInput;
  orderBy?: Array<OpeningWeekDayOrderByInput>;
  skip?: number;
  take?: number;
};
