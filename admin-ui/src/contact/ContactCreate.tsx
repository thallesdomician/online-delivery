import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectArrayInput } from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
