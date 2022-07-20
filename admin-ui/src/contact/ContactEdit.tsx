import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";
import { StoreTitle } from "../store/StoreTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
