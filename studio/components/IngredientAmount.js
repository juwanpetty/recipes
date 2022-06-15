import React, { forwardRef, useState, useRef } from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Select } from "@sanity/ui";
import PatchEvent, { set } from "@sanity/form-builder/PatchEvent";

const measurements = [
  { title: "Cups", value: "cups" },
  { title: "Tablespoons", value: "tbs" },
  { title: "Teaspoons", value: "tsp" },
  { title: "Sprinkle", value: "sprinkle" },
];

const createPatchFrom = (value) =>
  PatchEvent.from(value === {} ? unset() : set(value));

const IngredientAmount = forwardRef(
  ({ type: { description, title }, value, onChange }, ref) => {
    const unitsRef = useRef();

    const [localValue, setLocalValue] = useState(
      value ? { ...value } : { value: "", unit: measurements[0].value }
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
          {measurements.map((x, index) => (
            <option key={index} value={x.value}>
              {x.title}
            </option>
          ))}
        </Select>
      </FormField>
    );
  }
);

export default IngredientAmount;
