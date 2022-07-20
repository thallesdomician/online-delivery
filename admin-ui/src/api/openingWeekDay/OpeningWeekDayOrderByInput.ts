import { SortOrder } from "../../util/SortOrder";

export type OpeningWeekDayOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
  weekday?: SortOrder;
};
