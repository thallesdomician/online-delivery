import { StringFilter } from "../../util/StringFilter";
import { OpenHourListRelationFilter } from "../openHour/OpenHourListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OpeningWeekDayWhereInput = {
  id?: StringFilter;
  openHour?: OpenHourListRelationFilter;
  store?: StoreWhereUniqueInput;
};
