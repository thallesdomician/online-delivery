import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  storesId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
