import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OPENINGWEEKDAY_TITLE_FIELD } from "../openingWeekDay/OpeningWeekDayTitle";

export const OpenHourShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
