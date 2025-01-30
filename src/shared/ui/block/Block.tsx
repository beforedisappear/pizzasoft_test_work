import styles from './block.module.scss';
import cn from 'clsx';

import type { PropsWithChildren } from 'react';

// Определяем допустимые теги
type BlockTags = 'div' | 'ul' | 'form';

type Props<T extends BlockTags> = {
  as?: T;
  className?: string;
} & PropsWithChildren;

export function Block<T extends BlockTags>(props: Props<T>) {
  const { as: Tag = 'div', children, className } = props;

  return <Tag className={cn(styles.block, className)}>{children}</Tag>;
}
