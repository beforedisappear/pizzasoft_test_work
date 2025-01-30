import styles from './skeleton.module.scss';
import cn from 'clsx';

import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

export function Skeleton(props: Props) {
  const { children, className } = props;

  const classNames = cn(styles.skeleton, className);

  return <div className={classNames}>{children}</div>;
}
