import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactCreateNestedManyWithoutStoresInput } from "./ContactCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { UserCreateNestedManyWithoutStoresInput } from "./UserCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  address?: AddressWhereUniqueInput | null;
  contact?: ContactCreateNestedManyWithoutStoresInput;
  name: string;
  products?: ProductCreateNestedManyWithoutStoresInput;
  slug: string;
  user?: UserCreateNestedManyWithoutStoresInput;
};
