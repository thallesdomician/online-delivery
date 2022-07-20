import { SortOrder } from "../../util/SortOrder";

export type OpenHourOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  openingWeekDaysId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
