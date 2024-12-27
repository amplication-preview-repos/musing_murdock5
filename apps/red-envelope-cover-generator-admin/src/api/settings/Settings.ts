import { JsonValue } from "type-fest";

export type Settings = {
  createdAt: Date;
  font: JsonValue;
  id: string;
  style: JsonValue;
  updatedAt: Date;
};
