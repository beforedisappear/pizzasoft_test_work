import styles from './listbox.module.scss';
import Arrow from '@/shared/assets/arrow.svg?svgr';
import Check from '@/shared/assets/checkmark.svg?svgr';
// import cn from 'clsx';

import {
  useFormContext,
  get,
  Controller,
  type RegisterOptions,
  type FieldValues,
} from 'react-hook-form';

import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
  ListboxProps,
} from '@headlessui/react';

type LBOption = { name: string; value: string | number };

interface IProps<T extends LBOption> extends ListboxProps {
  name: string;
  options: T[];
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
}

export function Listbox<T extends LBOption>(props: IProps<T>) {
  const { name, options, rules, ...restProps } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.listbox_container}>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field }) => (
          <HeadlessListbox {...restProps} {...field} as='div'>
            <HeadlessListboxButton className={styles.listbox_button}>
              {options.find(el => el.value === field.value)?.name}

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
        )}
        rules={rules}
      />

      {get(errors, name)}
    </div>
  );
}
