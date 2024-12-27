import { HistoryListRelationFilter } from "../history/HistoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RedEnvelopeCoverWhereInput = {
  histories?: HistoryListRelationFilter;
  id?: StringFilter;
};
