import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  store?: StoreWhereUniqueInput | null;
};
