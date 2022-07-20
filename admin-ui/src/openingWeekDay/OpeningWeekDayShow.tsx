import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OPENINGWEEKDAY_TITLE_FIELD } from "./OpeningWeekDayTitle";

export const OpeningWeekDayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
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
