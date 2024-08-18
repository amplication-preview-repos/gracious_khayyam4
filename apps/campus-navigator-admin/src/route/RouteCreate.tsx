import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <NumberInput label="duration" source="duration" />
        <TextInput label="endLocation" source="endLocation" />
        <TextInput label="startLocation" source="startLocation" />
      </SimpleForm>
    </Create>
  );
};
