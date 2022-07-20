import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ContactWhereInput = {
  id?: StringFilter;
  stores?: StoreWhereUniqueInput;
};
