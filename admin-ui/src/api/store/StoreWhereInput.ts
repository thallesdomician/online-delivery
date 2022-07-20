import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpeningWeekDayListRelationFilter } from "../openingWeekDay/OpeningWeekDayListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type StoreWhereInput = {
  contact?: ContactListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  openingWeekDays?: OpeningWeekDayListRelationFilter;
  products?: ProductListRelationFilter;
  slug?: StringFilter;
  user?: UserListRelationFilter;
};
