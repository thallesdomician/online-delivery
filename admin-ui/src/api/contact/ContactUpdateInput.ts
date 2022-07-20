import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ContactUpdateInput = {
  stores?: StoreWhereUniqueInput | null;
  value?: Array<"whatsapp" | "mail" | "cellPhone" | "phone">;
};
