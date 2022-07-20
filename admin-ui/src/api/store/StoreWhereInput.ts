import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type StoreWhereInput = {
  addresses?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
  slug?: StringFilter;
  user?: UserListRelationFilter;
};
