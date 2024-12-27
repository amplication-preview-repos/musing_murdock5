import { StringFilter } from "../../util/StringFilter";
import { RedEnvelopeCoverWhereUniqueInput } from "../redEnvelopeCover/RedEnvelopeCoverWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryWhereInput = {
  id?: StringFilter;
  redEnvelopeCover?: RedEnvelopeCoverWhereUniqueInput;
  status?: "Option1";
  timeStamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
