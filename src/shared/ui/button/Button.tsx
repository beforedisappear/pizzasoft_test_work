import styles from './button.module.scss';
import cn from 'clsx';
import { Button as HeadlessButton, type ButtonProps } from '@headlessui/react';

interface Props extends ButtonProps {}

export function Button(props: Props) {
  const { children, className, ...restProps } = props;

  const classNames = cn(styles.button, className);

  return (
    <HeadlessButton {...restProps} className={classNames}>
      {children}
    </HeadlessButton>
  );
}
