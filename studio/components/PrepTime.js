import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Flex, Select, Card } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useId } from "@reach/auto-id";

const PrepTime = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  const inputId = useId();

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      markers={markers}
      presence={presence}
      inputId={inputId}
    >
      <Flex style={{ gap: `1rem` }}>
        <TextInput
          id={inputId}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          flex={1}
        />
        <Select>
          <option>Minutes</option>
          <option>Hours</option>
        </Select>
      </Flex>
    </FormField>
  );
});

export default PrepTime;
