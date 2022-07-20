import { SortOrder } from "../../util/SortOrder";

export type OpeningWeekDayOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  weekday?: SortOrder;
};
