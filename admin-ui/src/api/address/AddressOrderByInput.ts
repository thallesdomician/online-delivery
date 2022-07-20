import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  neighborhood?: SortOrder;
  state?: SortOrder;
  storeId?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
