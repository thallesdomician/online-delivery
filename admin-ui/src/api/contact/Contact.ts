export type Contact = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  value?: Array<"whatsapp" | "mail" | "cellPhone" | "phone">;
};
