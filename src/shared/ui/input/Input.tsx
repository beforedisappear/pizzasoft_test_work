import styles from './input.module.scss';
import cn from 'clsx';

import {
  Input as HeadlessInput,
  Field,
  Label,
  type InputProps,
} from '@headlessui/react';

import { useFormContext, get } from 'react-hook-form';

interface Props extends InputProps {
  name: string;
  label?: string;
}

export function Input(props: Props) {
  const { name, children, className, label, ...restProps } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const classNames = cn(styles.input, className);

  return (
    <div className={styles.container}>
      <Field className={styles.field}>
        {label && <Label className={styles.label}>{label}</Label>}

        <HeadlessInput
          {...restProps}
          {...register(name)}
          className={classNames}
        />

        {get(errors, name)}
      </Field>
    </div>
  );
}
