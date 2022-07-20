import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Neighborhood" source="neighborhood" />
        <TextInput label="State" source="state" />
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <TextInput label="Street" source="street" />
        <NumberInput step={1} label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
