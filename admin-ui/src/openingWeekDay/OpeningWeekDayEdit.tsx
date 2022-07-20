import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OpenHourTitle } from "../openHour/OpenHourTitle";
import { StoreTitle } from "../store/StoreTitle";

export const OpeningWeekDayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="openHour"
          reference="OpenHour"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpenHourTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Weekday"
          source="weekday"
          choices={[
            { label: "Sunday", value: "sunday" },
            { label: "Monday", value: "monday" },
            { label: "Tuesday", value: "tuesday" },
            { label: "Wednesday", value: "wednesday" },
            { label: "Thursday", value: "thursday" },
            { label: "Saturday", value: "saturday" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
