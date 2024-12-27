import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { RedEnvelopeCoverTitle } from "../redEnvelopeCover/RedEnvelopeCoverTitle";
import { UserTitle } from "../user/UserTitle";

export const HistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="redEnvelopeCover.id"
          reference="RedEnvelopeCover"
          label="RedEnvelopeCover"
        >
          <SelectInput optionText={RedEnvelopeCoverTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="timeStamp" source="timeStamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
