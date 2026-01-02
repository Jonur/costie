import type { FormEvent } from "react";

const getFormFieldData = <T>(formEvent: FormEvent<HTMLFormElement>, fieldName: string) => {
  const formData = new FormData(formEvent.currentTarget);
  const fieldValue = formData.get(fieldName);
  return fieldValue ? (fieldValue as T) : undefined;
};

export default getFormFieldData;
