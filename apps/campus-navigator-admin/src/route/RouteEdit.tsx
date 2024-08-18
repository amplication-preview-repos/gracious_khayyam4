import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <NumberInput label="duration" source="duration" />
        <TextInput label="endLocation" source="endLocation" />
        <TextInput label="startLocation" source="startLocation" />
      </SimpleForm>
    </Edit>
  );
};
