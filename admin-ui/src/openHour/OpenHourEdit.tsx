import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OpeningWeekDayTitle } from "../openingWeekDay/OpeningWeekDayTitle";

export const OpenHourEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
