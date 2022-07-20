import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  slug: string | null;
  updatedAt: Date;
};
