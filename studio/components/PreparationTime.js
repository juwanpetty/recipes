import React, { forwardRef, useCallback, useState } from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

const PreparationTime = forwardRef((props, ref) => {
  const {
    type: { description, title },
    onChange,
  } = props;

  // console.log("Value", props.value.value);
  // console.log("Unit", props.value.unit);
  console.log("Props", props);

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.currentTarget.value; // get current value
      console.log(inputValue);
      // if the value exists, set the data, if not, unset the data
      onChange(
        PatchEvent.from(
          inputValue ? set({ value: inputValue, unit: "" }) : unset()
        )
      );
    },
    [onChange]
  );

  return (
    <FormField title={title} description={description}>
      <TextInput onChange={handleChange} />
    </FormField>
  );
});

export default PreparationTime;
