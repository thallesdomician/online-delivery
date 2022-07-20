import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactCreateNestedManyWithoutStoresInput } from "./ContactCreateNestedManyWithoutStoresInput";
import { OpeningWeekDayCreateNestedManyWithoutStoresInput } from "./OpeningWeekDayCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { UserCreateNestedManyWithoutStoresInput } from "./UserCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  address?: AddressWhereUniqueInput | null;
  contact?: ContactCreateNestedManyWithoutStoresInput;
  name: string;
  openingWeekDays?: OpeningWeekDayCreateNestedManyWithoutStoresInput;
  products?: ProductCreateNestedManyWithoutStoresInput;
  slug: string;
  user?: UserCreateNestedManyWithoutStoresInput;
};
