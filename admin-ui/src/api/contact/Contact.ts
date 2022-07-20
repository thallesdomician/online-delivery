import { Store } from "../store/Store";

export type Contact = {
  createdAt: Date;
  id: string;
  stores?: Store | null;
  updatedAt: Date;
  value?: Array<"whatsapp" | "mail" | "cellPhone" | "phone">;
};
