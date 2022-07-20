import { Category } from "../category/Category";
import { Store } from "../store/Store";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  store?: Store | null;
  updatedAt: Date;
};
