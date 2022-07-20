import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="store.id" reference="Store" label="Stores">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="value"
          source="value"
          choices={[
            { label: "Whatsapp", value: "whatsapp" },
            { label: "Mail", value: "mail" },
            { label: "CellPhone", value: "cellPhone" },
            { label: "Phone", value: "phone" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
