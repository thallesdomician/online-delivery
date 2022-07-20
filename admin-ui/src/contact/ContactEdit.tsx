import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectArrayInput } from "react-admin";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
