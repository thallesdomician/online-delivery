import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Neighborhood" source="neighborhood" />
        <TextField label="State" source="state" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip" source="zip" />
      </Datagrid>
    </List>
  );
};
