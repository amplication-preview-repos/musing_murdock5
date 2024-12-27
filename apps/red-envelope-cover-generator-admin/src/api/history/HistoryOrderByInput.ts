import { SortOrder } from "../../util/SortOrder";

export type HistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  redEnvelopeCoverId?: SortOrder;
  status?: SortOrder;
  timeStamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
