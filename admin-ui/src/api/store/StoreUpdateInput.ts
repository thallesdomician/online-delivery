import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactUpdateManyWithoutStoresInput } from "./ContactUpdateManyWithoutStoresInput";
import { OpeningWeekDayUpdateManyWithoutStoresInput } from "./OpeningWeekDayUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";
import { UserUpdateManyWithoutStoresInput } from "./UserUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  address?: AddressWhereUniqueInput;
  contact?: ContactUpdateManyWithoutStoresInput;
  name?: string;
  openingWeekDays?: OpeningWeekDayUpdateManyWithoutStoresInput;
  products?: ProductUpdateManyWithoutStoresInput;
  slug?: string;
  user?: UserUpdateManyWithoutStoresInput;
};
