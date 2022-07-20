import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
