import styles from './input.module.scss';
import cn from 'clsx';

import { ErrorMessage } from '@hookform/error-message';

import {
  Input as HeadlessInput,
  Field,
  Label,
  type InputProps,
} from '@headlessui/react';

import {
  useFormContext,
  type RegisterOptions,
  type FieldValues,
  FieldPath,
} from 'react-hook-form';

interface Props extends InputProps {
  name: string;
  label?: string;
  rules?: RegisterOptions<FieldValues, FieldPath<FieldValues>>;
}

export function Input(props: Props) {
  const { name, children, className, label, rules, ...restProps } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [key: string]: string | number }>();

  const classNames = cn(styles.input, className);

  return (
    <div className={styles.container}>
      <Field className={styles.field}>
        {label && <Label className={styles.label}>{label}</Label>}

        <HeadlessInput
          {...restProps}
          {...register(name, { setValueAs: v => (v ? v : null), ...rules })}
          className={classNames}
        />

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className={styles.error}>{message}</span>
          )}
        />
      </Field>
    </div>
  );
}
