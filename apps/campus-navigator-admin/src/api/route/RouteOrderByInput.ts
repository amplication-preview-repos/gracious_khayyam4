import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  duration?: SortOrder;
  endLocation?: SortOrder;
  id?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
};
