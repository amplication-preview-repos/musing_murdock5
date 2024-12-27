import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { REDENVELOPECOVER_TITLE_FIELD } from "../redEnvelopeCover/RedEnvelopeCoverTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="RedEnvelopeCover"
          source="redenvelopecover.id"
          reference="RedEnvelopeCover"
        >
          <TextField source={REDENVELOPECOVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="timeStamp" source="timeStamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
