import { EmployeeList } from '@/widgets/EmployeeList';
import { EmployeeFilterPanel } from '@/widgets/EmployeeFilterPanel';

interface Props {}

export function HomePage({}: Props) {
  return (
    <>
      <EmployeeFilterPanel />
      <EmployeeList />
    </>
  );
}
