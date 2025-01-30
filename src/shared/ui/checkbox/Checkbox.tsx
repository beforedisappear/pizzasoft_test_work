import styles from './checkbox.module.scss';
import Checkmark from '@/shared/assets/checkmark.svg?svgr';

import {
  Checkbox as HeadlessCheckbox,
  Field,
  Label,
  type CheckboxProps,
} from '@headlessui/react';

import { Controller, useFormContext } from 'react-hook-form';

interface IProps extends CheckboxProps {
  name: string;
  label?: string;
}

export function Checkbox(props: IProps) {
  const { label, name, ...restProps } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Field className={styles.checkbox_container}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <HeadlessCheckbox
            {...restProps}
            {...field}
            data-check={field.value === true}
            className={styles.checkbox}
          >
            <Checkmark className={styles.checkbox_icon} />
          </HeadlessCheckbox>
        )}
      />

      {label && <Label className={styles.checkbox_label}>{label}</Label>}
    </Field>
  );
}
