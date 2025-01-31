import { Skeleton } from '@/shared/ui';

interface Props {}

export function EditEmployeeSkeleton({}: Props) {
  return (
    <Skeleton
      style={{ display: 'flex', width: '100%', height: '100%', flexGrow: 1 }}
    />
  );
}
