import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HistoryListRelationFilter } from "../history/HistoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  histories?: HistoryListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
