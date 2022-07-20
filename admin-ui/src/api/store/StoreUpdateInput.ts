import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactUpdateManyWithoutStoresInput } from "./ContactUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";
import { UserUpdateManyWithoutStoresInput } from "./UserUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  contact?: ContactUpdateManyWithoutStoresInput;
  name?: string;
  products?: ProductUpdateManyWithoutStoresInput;
  slug?: string;
  user?: UserUpdateManyWithoutStoresInput;
};
