import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingsWhereInput = {
  font?: JsonFilter;
  id?: StringFilter;
  style?: JsonFilter;
};
