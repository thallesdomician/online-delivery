import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OPENINGWEEKDAY_TITLE_FIELD } from "../openingWeekDay/OpeningWeekDayTitle";

export const OpenHourList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OpenHours"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Opening Week Days"
          source="openingweekday.id"
          reference="OpeningWeekDay"
        >
          <TextField source={OPENINGWEEKDAY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
