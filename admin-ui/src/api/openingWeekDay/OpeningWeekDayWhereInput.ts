import { StringFilter } from "../../util/StringFilter";
import { OpenHourListRelationFilter } from "../openHour/OpenHourListRelationFilter";

export type OpeningWeekDayWhereInput = {
  id?: StringFilter;
  openHour?: OpenHourListRelationFilter;
};
