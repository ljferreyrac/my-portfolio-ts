import { useEffect, useMemo, useState, ChangeEvent } from "react";

interface FormValidations {
  [key: string]: [(value: string) => boolean, string];
}

interface FormValidationState {
  [key: string]: string | null;
}

export const useForm = <T extends Record<string, string>>(
  initialForm: T,
  formValidations: FormValidations = {}
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formValidation, setFormValidation] = useState<FormValidationState>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    return Object.values(formValidation).every((value) => value === null);
  }, [formValidation]);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: FormValidationState = {};

    for (const formField in formValidations) {
      if (Object.prototype.hasOwnProperty.call(formValidations, formField)) {
        const [fn, errorMessage] = formValidations[formField];
        formCheckedValues[`${formField}Valid`] = fn(formState[formField])
          ? null
          : errorMessage;
      }
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
