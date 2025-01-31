import { ErrorMessage } from '@/widgets/ErrorMessage';

interface Props {}

export function NotFoundPage({}: Props) {
  return (
    <>
      <ErrorMessage message='Страница не найдена' />
    </>
  );
}
