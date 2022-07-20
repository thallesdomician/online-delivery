import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  neighborhood?: StringNullableFilter;
  state?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  street?: StringNullableFilter;
  zip?: IntNullableFilter;
};
