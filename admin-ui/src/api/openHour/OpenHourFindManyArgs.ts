import { OpenHourWhereInput } from "./OpenHourWhereInput";
import { OpenHourOrderByInput } from "./OpenHourOrderByInput";

export type OpenHourFindManyArgs = {
  where?: OpenHourWhereInput;
  orderBy?: Array<OpenHourOrderByInput>;
  skip?: number;
  take?: number;
};
