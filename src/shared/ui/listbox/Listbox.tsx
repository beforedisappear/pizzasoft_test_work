import styles from './listbox.module.scss';

import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
} from '@headlessui/react';
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import cn from 'clsx';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
];

export function Listbox() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <div className={styles.listboxContainer}>
      <HeadlessListbox value={selected} onChange={setSelected}>
        <HeadlessListboxButton className={styles.listboxButton}>
          {selected.name}
          {/* <ChevronDownIcon
            className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
            aria-hidden='true'
          /> */}
        </HeadlessListboxButton>
        <HeadlessListboxOptions
          anchor='bottom'
          transition
          className={styles.listboxOptions}
        >
          {people.map(person => (
            <HeadlessListboxOption
              key={person.name}
              value={person}
              className={styles.listboxOption}
            >
              {/* <CheckIcon className='invisible size-4 fill-white group-data-[selected]:visible' /> */}
              <div className={styles.optionText}>{person.name}</div>
            </HeadlessListboxOption>
          ))}
        </HeadlessListboxOptions>
      </HeadlessListbox>
    </div>
  );
}
