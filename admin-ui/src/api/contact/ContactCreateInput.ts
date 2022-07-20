import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ContactCreateInput = {
  stores?: StoreWhereUniqueInput | null;
  value?: Array<"whatsapp" | "mail" | "cellPhone" | "phone">;
};
