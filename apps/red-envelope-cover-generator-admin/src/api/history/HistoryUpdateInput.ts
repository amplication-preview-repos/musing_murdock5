import { RedEnvelopeCoverWhereUniqueInput } from "../redEnvelopeCover/RedEnvelopeCoverWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryUpdateInput = {
  redEnvelopeCover?: RedEnvelopeCoverWhereUniqueInput | null;
  status?: "Option1" | null;
  timeStamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
