import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OpeningWeekDayTitle } from "../openingWeekDay/OpeningWeekDayTitle";

export const OpenHourCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="openingweekday.id"
          reference="OpeningWeekDay"
          label="Opening Week Days"
        >
          <SelectInput optionText={OpeningWeekDayTitle} />
        </ReferenceInput>
        <TextInput label="startTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
