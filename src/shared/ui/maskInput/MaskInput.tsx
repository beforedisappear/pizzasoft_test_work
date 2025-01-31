import styles from './maskInput.module.scss';
import cn from 'clsx';

import { Controller, useFormContext } from 'react-hook-form';

import { InputMask, type MaskOptions } from '@react-input/mask';
import { Field, Label } from '@headlessui/react';
import { ErrorMessage } from '@hookform/error-message';

import type { ControlledInputRules } from '@/shared/lib/react-hook-form';

interface IProps {
  name: string;
  mask: MaskOptions;
  className?: string;
  placeholder?: string;
  label?: string;
  rules?: ControlledInputRules;
}

export function MaskInput(props: IProps) {
  const { mask, name, className, label, rules, placeholder } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext<{ [key: string]: string | number }>();

  return (
    <div className={cn(styles.container, className)}>
      <Field className={styles.field}>
        {label && <Label className={styles.label}>{label}</Label>}

        <Controller
          name={name}
          control={control}
          defaultValue={''}
          rules={rules}
          render={({ field: { value, ...field } }) => (
            <InputMask
              {...field}
              {...mask}
              value={value}
              placeholder={placeholder || mask.mask}
              className={styles.mask_input}
            />
          )}
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
