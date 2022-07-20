import { Store } from "../store/Store";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  stores?: Array<Store>;
  updatedAt: Date;
  username: string;
};
