import { Store } from "../store/Store";

export type Address = {
  city: string | null;
  createdAt: Date;
  id: string;
  neighborhood: string | null;
  state: string | null;
  store?: Store;
  street: string | null;
  updatedAt: Date;
  zip: number | null;
};
