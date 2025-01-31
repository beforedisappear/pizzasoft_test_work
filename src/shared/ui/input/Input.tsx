import styles from './input.module.scss';
import cn from 'clsx';

import { ErrorMessage } from '@hookform/error-message';
import {
  Input as HeadlessInput,
  Field,
  Label,
  type InputProps,
} from '@headlessui/react';

import { useFormContext } from 'react-hook-form';

import type { UnControlledInputRules } from '@/shared/lib/react-hook-form';

interface Props extends InputProps {
  name: string;
  className?: string;
  label?: string;
  rules?: UnControlledInputRules;
}

export function Input(props: Props) {
  const { name, children, className, label, rules, ...restProps } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [key: string]: string | number }>();

  const classNames = cn(styles.input, className);

  return (
    <div className={cn(styles.container, className)}>
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
