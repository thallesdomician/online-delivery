import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Store = {
  addresses?: Address | null;
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<Product>;
  slug: string;
  updatedAt: Date;
  user?: Array<User>;
};
