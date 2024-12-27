import { History } from "../history/History";

export type RedEnvelopeCover = {
  createdAt: Date;
  histories?: Array<History>;
  id: string;
  updatedAt: Date;
};
