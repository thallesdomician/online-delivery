import { Address } from "../address/Address";
import { Contact } from "../contact/Contact";
import { OpeningWeekDay } from "../openingWeekDay/OpeningWeekDay";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Store = {
  address?: Address;
  contact?: Array<Contact>;
  createdAt: Date;
  id: string;
  name: string;
  openingWeekDays?: Array<OpeningWeekDay>;
  products?: Array<Product>;
  slug: string;
  updatedAt: Date;
  user?: Array<User>;
};
