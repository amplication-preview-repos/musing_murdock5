import { RedEnvelopeCover as TRedEnvelopeCover } from "../api/redEnvelopeCover/RedEnvelopeCover";

export const REDENVELOPECOVER_TITLE_FIELD = "id";

export const RedEnvelopeCoverTitle = (record: TRedEnvelopeCover): string => {
  return record.id?.toString() || String(record.id);
};
