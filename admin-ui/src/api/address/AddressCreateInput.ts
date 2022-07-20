import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type AddressCreateInput = {
  city?: string | null;
  neighborhood?: string | null;
  state?: string | null;
  store?: StoreWhereUniqueInput;
  street?: string | null;
  zip?: number | null;
};
