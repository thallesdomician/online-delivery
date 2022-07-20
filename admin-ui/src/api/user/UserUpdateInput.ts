import { StoreUpdateManyWithoutUsersInput } from "./StoreUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  stores?: StoreUpdateManyWithoutUsersInput;
  username?: string;
};
