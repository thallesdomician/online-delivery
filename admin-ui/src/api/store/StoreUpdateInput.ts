import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";
import { UserUpdateManyWithoutStoresInput } from "./UserUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string;
  products?: ProductUpdateManyWithoutStoresInput;
  slug?: string;
  user?: UserUpdateManyWithoutStoresInput;
};
