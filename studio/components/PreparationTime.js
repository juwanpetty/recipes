import React, { forwardRef, useState, useRef } from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Select } from "@sanity/ui";
import PatchEvent, { set } from "@sanity/form-builder/PatchEvent";

const time = [
  { title: "Minutes", value: "minutes" },
  { title: "Hours", value: "hours" },
];

const createPatchFrom = (value) =>
  PatchEvent.from(value === {} ? unset() : set(value));

const PreparationTime = forwardRef(
  ({ type: { description, title }, value, onChange }, ref) => {
    const unitsRef = useRef();

    const [localValue, setLocalValue] = useState(
      value ? { ...value } : { value: "", unit: time[0].value }
    );

    const handleChange = (inputValue, selectValue) => {
      const updatedValue = { ...localValue };

      if (inputValue === "") {
        updatedValue.value = "";
      } else {
        updatedValue.value = inputValue
          ? parseFloat(inputValue)
          : parseFloat(updatedValue.value);
      }

      if (selectValue) {
        updatedValue.unit = selectValue;
      }

      setLocalValue(updatedValue);
      onChange(createPatchFrom(updatedValue));
    };

    return (
      <FormField title={title} description={description}>
        <TextInput
          ref={ref}
          type="number"
          onChange={(event) => handleChange(event.target.value)}
          value={localValue.value}
        />
        <Select
          value={localValue.unit}
          ref={unitsRef}
          onChange={(event) => handleChange(undefined, event.target.value)}
        >
          {time.map((x, index) => (
            <option key={index} value={x.value}>
              {x.title}
            </option>
          ))}
        </Select>
      </FormField>
    );
  }
);

export default PreparationTime;
