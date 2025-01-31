import styles from './listbox.module.scss';
import Arrow from '@/shared/assets/arrow.svg?svgr';
import Check from '@/shared/assets/checkmark.svg?svgr';
import cn from 'clsx';

import { useFormContext, get, Controller } from 'react-hook-form';

import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
  type ListboxProps,
} from '@headlessui/react';

import type { ControlledInputRules } from '@/shared/lib/react-hook-form';

type LBOption = { name: string; value: string };

interface IProps<T extends LBOption> extends ListboxProps {
  name: string;
  options: T[];
  className?: string;
  rules?: ControlledInputRules;
}

export function Listbox<T extends LBOption>(props: IProps<T>) {
  const {
    name,
    options,
    rules,
    className,
    onChange: CustomOnChange,
    ...restProps
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn(styles.listbox_container, className)}>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0]?.value}
        render={({ field: { onChange, ...field } }) => {
          const handleChange = (e: T['value']) => {
            onChange(e);
            if (CustomOnChange) CustomOnChange(e);
          };

          const selectedValue = options.find(
            el => el.value === field.value,
          )?.name;

          return (
            <HeadlessListbox
              {...restProps}
              {...field}
              onChange={handleChange}
              as='div'
            >
              <HeadlessListboxButton className={styles.listbox_button}>
                {selectedValue}
                <Arrow aria-hidden className={styles.listbox_chevron_icon} />
              </HeadlessListboxButton>

              <HeadlessListboxOptions
                anchor='bottom'
                transition
                className={styles.listbox_options}
              >
                {options.map(option => (
                  <HeadlessListboxOption
                    key={option.value}
                    value={option.value}
                    className={styles.listbox_option}
                    data-select={option.value === field.value}
                  >
                    <Check aria-hidden className={styles.listbox_check_icon} />

                    <div className={styles.option_text}>{option.name}</div>
                  </HeadlessListboxOption>
                ))}
              </HeadlessListboxOptions>
            </HeadlessListbox>
          );
        }}
        rules={rules}
      />

      {get(errors, name)}
    </div>
  );
}
