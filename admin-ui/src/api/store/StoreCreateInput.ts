import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { UserCreateNestedManyWithoutStoresInput } from "./UserCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  addresses?: AddressWhereUniqueInput | null;
  name: string;
  products?: ProductCreateNestedManyWithoutStoresInput;
  slug: string;
  user?: UserCreateNestedManyWithoutStoresInput;
};
