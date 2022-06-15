import React, { forwardRef } from "react";
import { FormField } from "@sanity/base/components";

const IngredientPicker = forwardRef(({ type: { description, title } }) => {
  return <FormField title={title} description={description}></FormField>;
});

export default IngredientPicker;
