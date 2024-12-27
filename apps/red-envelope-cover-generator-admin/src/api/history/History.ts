import { RedEnvelopeCover } from "../redEnvelopeCover/RedEnvelopeCover";
import { User } from "../user/User";

export type History = {
  createdAt: Date;
  id: string;
  redEnvelopeCover?: RedEnvelopeCover | null;
  status?: "Option1" | null;
  timeStamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
