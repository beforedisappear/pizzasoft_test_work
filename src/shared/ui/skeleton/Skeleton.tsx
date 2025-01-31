import styles from './skeleton.module.scss';
import cn from 'clsx';

import type { CSSProperties, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export function Skeleton(props: Props) {
  const { children, className, style } = props;

  const classNames = cn(styles.skeleton, className);

  return (
    <div style={style} className={classNames}>
      {children}
    </div>
  );
}
