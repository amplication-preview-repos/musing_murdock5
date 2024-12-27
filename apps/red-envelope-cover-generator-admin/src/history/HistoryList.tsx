import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REDENVELOPECOVER_TITLE_FIELD } from "../redEnvelopeCover/RedEnvelopeCoverTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Histories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
