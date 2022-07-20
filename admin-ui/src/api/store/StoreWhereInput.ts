import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpeningWeekDayListRelationFilter } from "../openingWeekDay/OpeningWeekDayListRelationFilter";

export type StoreWhereInput = {
  contact?: ContactListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  openingWeekDays?: OpeningWeekDayListRelationFilter;
  slug?: StringFilter;
};
