import styles from './sortEmployees.module.scss';
import cn from 'clsx';
import Sort from '@/shared/assets/sort.svg?svgr';

import { Button } from '@/shared/ui';

import { useAppDispatch, useAppSelector } from '@/shared/store';

import {
  selectSortBy,
  selectSortDirection,
  setSortDirection,
  setSortBy,
  type Employee,
  type EmployeeSortDir,
} from '@/entities/Employee';
import { mapSortByName } from './SortEmployees.data';

interface Props {}

export function SortEmployees({}: Props) {
  const dispath = useAppDispatch();
  const sortBy = useAppSelector(selectSortBy);
  const sortDirection = useAppSelector(selectSortDirection);

  const onSetSortBy = () => {
    let sortByParam: keyof Employee = sortBy === 'name' ? 'birthday' : 'name';

    dispath(setSortBy(sortByParam));
  };

  const onSetSortDirection = () => {
    let sortDirParam: EmployeeSortDir =
      sortDirection === 'asc' ? 'desc' : 'asc';

    dispath(setSortDirection(sortDirParam));
  };

  return (
    <>
      <Button
        type='button'
        onClick={onSetSortBy}
        className={styles.sort_employees_btn_type}
      >
        {mapSortByName[sortBy]}
      </Button>

      <Button
        type='button'
        onClick={onSetSortDirection}
        className={cn(styles.sort_employees_btn_dir, {
          [styles.rotated]: sortDirection === 'asc',
        })}
      >
        <Sort height={20} width={20} />
      </Button>
    </>
  );
}
