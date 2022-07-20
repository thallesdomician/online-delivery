import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  neighborhood?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  zip?: IntNullableFilter;
};
