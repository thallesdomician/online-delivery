import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OPENINGWEEKDAY_TITLE_FIELD } from "./OpeningWeekDayTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const OpeningWeekDayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weekday" source="weekday" />
        <ReferenceManyField
          reference="OpenHour"
          target="OpeningWeekDayId"
          label="OpenHours"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
