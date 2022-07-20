import { StoreCreateNestedManyWithoutUsersInput } from "./StoreCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  stores?: StoreCreateNestedManyWithoutUsersInput;
  username: string;
};
