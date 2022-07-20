import { Address } from "../address/Address";
import { Contact } from "../contact/Contact";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Store = {
  address?: Address | null;
  contact?: Array<Contact>;
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<Product>;
  slug: string;
  updatedAt: Date;
  user?: Array<User>;
};
