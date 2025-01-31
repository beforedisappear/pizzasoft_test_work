import type { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export type ControlledInputRules = Omit<
  RegisterOptions<FieldValues, string>,
  'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type UnControlledInputRules = RegisterOptions<
  FieldValues,
  FieldPath<FieldValues>
>;

export type InputRules = ControlledInputRules | UnControlledInputRules;
